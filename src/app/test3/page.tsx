"use client";
import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import '../../../styles/globals1.css';


const keyboardMap = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "left", keys: ["KeyA", "ArrowLeft"] },
  { name: "right", keys: ["KeyD", "ArrowRight"] },
  { name: "run", keys: ["Shift"] },
];
export default function Home() {
  return (
    <KeyboardControls map={keyboardMap}>
      <div id="canvas-container">
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
          style={{ touchAction: "none", height: '100%' }}
        >
          <Experience />
        </Canvas>
      </div>
    </KeyboardControls>
  );
}
