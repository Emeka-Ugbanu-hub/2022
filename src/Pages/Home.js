import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import Year from "../components/Text";
import Particles from "../Effects/particles";
import Effects from "../Effects/effect";
import Sparks from "../Effects/sparkle";

function Home() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      <div style={{ width: "100%", height: "95vh", overflow: "hidden" }}>
        <Canvas
          pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
          camera={{ fov: 90, position: [0, 0, 40] }}
          onCreated={({ gl }) => {
            gl.toneMapping = THREE.ReinhardToneMapping;
            gl.setClearColor(new THREE.Color("#020207"));
          }}
        >
          <fog attach="fog" args={["white", 50, 190]} />
          <pointLight
            position={[0, 20, 20]} // Adjust position for better balance
            distance={100}
            intensity={4}
            color="white"
          />
          <Year
            text="2025"
            materials={[
              { emissiveIntensity: 0.8 }, // "2"
              { emissiveIntensity: 0.8 }, // "0"
              { emissiveIntensity: 0.8 }, // "2"
              { emissiveIntensity: 0.5 }, // "5" reduced intensity
            ]}
          />
          <Particles count={isMobile ? 5000 : 10000} />
          <Sparks
            count={30}
            colors={[
              "#A2CCB6",
              "#FCEEB5",
              "#EE786E",
              "#e0feff",
              "lightpink",
              "lightblue",
            ]}
          />
          <Effects />
        </Canvas>
      </div>
      <div style={{ textAlign: "center" }}>
        <a
          style={{ color: "#fff", fontSize: "20px" }}
          href="https://github.com/Emeka-Ugbanu-hub"
        >
          Made with ❤️ by EMEKA UGBANU
        </a>
      </div>
    </>
  );
}

export default Home;
