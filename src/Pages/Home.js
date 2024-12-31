import React from "react";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import Year from "../components/Text";
import Particles from "../Effects/particles";
import Effects from "../Effects/effect";
import Sparks from "../Effects/sparkle";

function Home() {  
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);     

  return (   
    <>     
      <div style={{ width: '100%', height: '95vh', overflow: 'hidden' }}>
        <Canvas
          pixelRatio={Math.min(2, isMobile ? window.devicePixelRatio : 1)}
          camera={{ fov: 90, position: [0, 0, 40] }}
          onCreated={({ gl }) => {       
            gl.toneMapping = THREE.ReinhardToneMapping;       
            gl.setClearColor(new THREE.Color('#020207'));     
          }}
        >   
          // <fog attach="fog" args={['#FFD7B5', 20, 190]} />       
          // <pointLight distance={100} intensity={0.5} color="#FFD7B5" />       
          <Year />       
          <Particles count={isMobile ? 5000 : 10000} />       
          <Sparks count={30} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />       
          <Effects />    
        </Canvas>    
      </div>    

      <div style={{ textAlign: "center" }}>      
        <a style={{ color: "#fff", fontSize: '20px' }} href="https://github.com/Emeka-Ugbanu-hub">
          Made with ❤️ by EMEKA UGBANU
        </a>       
      </div>     
    </>   
  ); 
}  

export default Home;
