import React from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
// import * as THREE from "three";

const Basic = () => {
  return (
    <Canvas style={{backgroundColor:'gray'}}>
    <pointLight position={[10, 10, 10]} />
    {/* <primitive object={new THREE.AxesHelper(5)} /> */}
    <mesh position={[-1,0,-1]}>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    <mesh position={[1,0,1]}>
      <boxGeometry args={[1.5,1.5,1.5]}/>
      <meshStandardMaterial color="yellow" />
    </mesh>
    <OrbitControls />
    </Canvas>
  )
}

export default Basic;