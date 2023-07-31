import React from 'react'
import styled from 'styled-components'

import {
    OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cube from './Cube';

const Section = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 display: flex;
 justify-content: center;
`;

const Container = styled.div`
 height: 100vh;
 scroll-snap-align: center;
 width: 1400px;
 display: flex;
 justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;

    @media only screen and (max-width: 768px){
        display: none;
    }
`;

const Title = styled.h1`
    font-size: 74px;

    @media only screen and (max-width: 768px){
        font-size: 60px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media only screen and (max-width: 768px){
       align-items: center;
       text-align: center;
    }
`;

const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Line = styled.img`
    height: 5px;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
`;

// const Button = styled.button`
//     background-color: #da4ea2;
//     color: white;
//     font-weight: 500;
//     width: 120px;
//     padding: 10px;
//     border-radius: 5px;
//     cursor: pointer;
// `;


const Who = () => {
  return (
    <Section>
        <Container>
            <Left>
                <Canvas camera={{fov:25, position:[5,5,5]}}>
                    <OrbitControls enableZoom={false} autoRotate/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <Cube />
                </Canvas>
            </Left>
            <Right>
                <Title id="threejs">Three.js</Title>
                <WhatWeDo>
                    <Line src="/img/line.png"/>
                    <Subtitle>マウスで立体的に動かせる。</Subtitle>
                </WhatWeDo>
                <Desc>Three.jsを使用して、マウス操作で立体的な動きを楽しむことができます。Three.jsは、Webブラウザ上で3Dグラフィックスを作成するためのJavaScriptライブラリであり、直感的なマウス操作によって立体的な世界を自由に探索できます。立体的なモデルの回転やズームイン・ズームアウトをマウスの動きでコントロールすることで、没入感溢れるリッチな体験を提供します。3Dアートやゲーム開発、可視化など様々な分野で利用され、創造的な表現が可能となっています。</Desc>
                {/* <Button>See our works</Button> */}

            </Right>
        </Container>
    </Section>
  )
}

export default Who
