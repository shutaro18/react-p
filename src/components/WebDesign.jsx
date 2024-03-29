import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from 'react'
import React_logo from './React_logo'
import style from 'styled-components';

// const Desc = style.div`
//   width: 200px;
//   height: 70px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 10px;
//   position: absolute;
//   top: 100px;
//   right: 100px;

//   @media only screen and (max-width: 768px){
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//   }
// `;

const WebDesign = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <React_logo />
      </Stage>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
      {/* <Desc>
        kokokokokokokok
      </Desc> */}
    </>
  )
}

export default WebDesign
