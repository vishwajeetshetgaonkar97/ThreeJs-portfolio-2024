import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function NightSky({isRotating,...props}) {
  const { nodes, materials } = useGLTF("/images/NightSky.glb");

  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.z += 0.25 * delta; // Adjust the rotation speed as needed
    }
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sky_Mat_0.geometry}
            material={materials.material}
            position={[51.637, 0, -817.579]}
            rotation={[0, -1.571, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_Poly_Poly_0.geometry}
            material={materials.Poly}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_1_Cloud_1_0.geometry}
            material={materials.Cloud_1}
            position={[-102.342, -152.023, -1209.99]}
            rotation={[1.917, 0.433, 0.911]}
            scale={1.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_2_Cloud_2_0.geometry}
            material={materials.Cloud_2}
            position={[333.052, -63.933, -1541.733]}
            rotation={[-2.901, 0.214, -1.167]}
            scale={1.5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cloud_3_Cloud_3_0.geometry}
            material={materials.Cloud_3}
            position={[339.375, -70.968, -1571.745]}
            rotation={[2.892, -1.308, 3.083]}
            scale={1.189}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/images/NightSky.glb");