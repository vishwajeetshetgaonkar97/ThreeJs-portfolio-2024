import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Sky({isRotating,...props}) {
  const { nodes, materials } = useGLTF("/sky.glb");

  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.z += 0.1 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere__0.geometry}
          material={materials["Scene_-_Root"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={30000}
          ref={skyRef}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/sky.glb");