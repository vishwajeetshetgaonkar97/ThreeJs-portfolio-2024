import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Bird(props) {
  const birdRef = useRef();
  const { scene,nodes, materials, animations } = useGLTF("/images/models/bird.glb");
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);


  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 1;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 7) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 7) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward
      birdRef.current.position.x += 0.01;
      // birdRef.current.position.z -= 0.01;
    } else {
      // Moving backward
      birdRef.current.position.x -= 0.01;
      // birdRef.current.position.z += 0.01;
    }
  });

  return (
    <group ref={birdRef} {...props} dispose={null}>
    <group name="Sketchfab_Scene">
      <group
        name="Sketchfab_model"
        scale={[0.002, 0.002, 0.002]}
        rotation={[80,0,0]}
      >
        <group
          name="5f59736c86d4457fa045aec4aea6b7e0fbx"
          rotation={[Math.PI / 2, 0, 0]}
        >
          <group name="Object_2">
            <group name="RootNode">
              <group name="Object_4">
                <primitive object={nodes._rootJoint} />
                <skinnedMesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.MatI_Ride_FengHuang_01a}
                  skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.MatI_Ride_FengHuang_01b}
                  skeleton={nodes.Object_8.skeleton}
                />
                <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                <group
                  name="AMesh_Ride_FengHuang_01"
                  rotation={[-Math.PI / 2, 0, 0]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  </group>
  );
}

useGLTF.preload("/images/models/bird.glb");
