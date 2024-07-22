import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export function Ship({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) {
  const islandRef = useRef();
  const { nodes, materials } = useGLTF("/ship.glb");
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;
  const scrollSpeed = useRef(0);
  const scrollDamping = 0.9;
  const isScrolling = useRef(false);

  const handlePointerDown = (event) => {
    if (isScrolling.current) return;
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    if (isScrolling.current) return;
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    if (isScrolling.current) return;
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current += 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);
      rotationSpeed.current -= 0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  let scrollTimeout = useRef();

  const handleScroll = (event) => {
    clearTimeout(scrollTimeout.current);

    setIsRotating(true);
    isScrolling.current = true;

    if (event.deltaY < 0) { // Scroll up
      scrollSpeed.current += 0.005;
    } else if (event.deltaY > 0) { // Scroll down
      scrollSpeed.current -= 0.005;
    }

    scrollTimeout.current = setTimeout(() => {
      scrollSpeed.current = 0;
      setIsRotating(false);
      isScrolling.current = false;
    }, 200); // Adjust timeout duration as needed
  };

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown, { passive: false });
    canvas.addEventListener("pointerup", handlePointerUp, { passive: false });
    canvas.addEventListener("pointermove", handlePointerMove, { passive: false });
    canvas.addEventListener("touchstart", handlePointerDown, { passive: false });
    canvas.addEventListener("touchend", handlePointerUp, { passive: false });
    canvas.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });
    window.addEventListener("keyup", handleKeyUp, { passive: false });
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
    }

    // Apply the scroll speed with damping
    scrollSpeed.current *= scrollDamping;
    if (Math.abs(scrollSpeed.current) < 0.001) {
      scrollSpeed.current = 0;
    }

    islandRef.current.rotation.y += rotationSpeed.current + scrollSpeed.current;

    const rotation = islandRef.current.rotation.y;
    const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
    const stageSize = (2 * Math.PI) / 4;
    const stage = Math.floor(normalizedRotation / stageSize) + 1;
    setCurrentStage(stage);

    // Apply floating motion
    islandRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.1; // Floating up and down
    islandRef.current.rotation.x = Math.sin(elapsedTime * 0.3) * 0.01; // Tilt in the x direction
    islandRef.current.rotation.z = Math.cos(elapsedTime * 0.3) * 0.01; // Tilt in the z direction
  });

  return (
    <group ref={islandRef} {...props} dispose={null}>
      <group scale={0.006}>
        <group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boot_Finaal_1_Boot_Finaal_0.geometry}
            material={materials.Boot_Finaal}
            rotation={[0, -0.6, 0]}
            scale={5}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ship.glb");
