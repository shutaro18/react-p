import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import {
    OrbitControls,
    PerspectiveCamera,
    RenderTexture,
    Text,
} from '@react-three/drei'

const Cube = () => {
    const textRef = useRef()
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.getElapsedTime()) * 2))
  return (
    <mesh>
        <boxGeometry />
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <color attach="background" args={["#dc9dcd"]}/>
                <Text ref={textRef} fontSize={2} color="#555">
                    Three.js
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube
