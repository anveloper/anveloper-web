import { Canvas, Color, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React, { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";

const Card = () => {
  const [ligthColor, setLightColor] = useState<Color>();
  const [lightIntensity, setLightIntensity] = useState<number>(1);

  const Test = () => {
    const object3d = useRef<THREE.Object3D>(null!);
    useFrame((state, delta) => (object3d.current.rotation.y += 0.005));
    return (
      <object3D ref={object3d}>
        <OrbitControls />
      </object3D>
    );
  };

  return (
    <Canvas
      camera={{
        fov: 30,
        near: 1,
        aspect: window.innerWidth / window.innerHeight,
      }}
    >
      <pointLight color={ligthColor} intensity={lightIntensity} />
      <directionalLight color={ligthColor} intensity={lightIntensity} />
      <ambientLight color={ligthColor} intensity={lightIntensity} />
    </Canvas>
  );
};

export default Card;
