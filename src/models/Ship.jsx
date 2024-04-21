import React, { useEffect, useRef } from "react";
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

  const skyRef = useRef();
   // Use a ref for the last mouse x position
   const lastX = useRef(0);
   // Use a ref for rotation speed
   const rotationSpeed = useRef(0);
   // Define a damping factor to control rotation damping
   const dampingFactor = 0.95;

   
  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };


  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    // window.addEventListener("keydown", handleKeyDown);
    // window.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      // window.removeEventListener("keydown", handleKeyDown);
      // window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl,  handlePointerDown, handlePointerUp, handlePointerMove]);


  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;
  
      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
  
      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;
  
      // Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI]
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  
      // Set the current stage based on the island's orientation
      const stageSize = 2 * Math.PI / 4; // Divide by the number of stages
      const stage = Math.floor(normalizedRotation / stageSize) + 1;
  
      setCurrentStage(stage);
    }
  });

  // Add this inside your useEffect hook
useEffect(() => {
  // Check if the browser supports DeviceOrientationEvent
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleDeviceOrientation);
  } else {
    console.log("Sorry, your browser doesn't support Device Orientation");
  }

  // Remove event listener when component unmounts
  return () => {
    if (window.DeviceOrientationEvent) {
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    }
  };
}, []);

// Handle device orientation changes
const handleDeviceOrientation = (event) => {
  const { alpha, beta, gamma } = event;

  // Convert degrees to radians
  const alphaRad = alpha * (Math.PI / 180);
  const betaRad = beta * (Math.PI / 180);
  const gammaRad = gamma * (Math.PI / 180);

  // Use these values to update your component's rotation
  islandRef.current.rotation.y = gammaRad;
  islandRef.current.rotation.x = betaRad;
  islandRef.current.rotation.z = alphaRad;
};

  

  return (
    <group ref={islandRef} {...props} dispose={null}>
      <group  scale={0.005} >
        <group >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Boot_Finaal_1_Boot_Finaal_0.geometry}
            material={materials.Boot_Finaal}
            rotation={[0, -0.6, 0]}
            scale={5}
            ref={skyRef}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ship.glb");