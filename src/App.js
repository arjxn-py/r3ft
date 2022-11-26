import React, {Component} from 'react';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import * as THREE from "three";

class App extends Component {
    render() {

        return (
            <>
            <Canvas style={{backgroundColor:'gray'}}>
            <pointLight position={[10, 10, 10]} />
            <primitive object={new THREE.AxesHelper(5)} />
            <mesh>
              <sphereGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
            <mesh position={[5,5,5]}>
              <boxGeometry args={[5,5,5]}/>
              <meshStandardMaterial color="yellow" />
            </mesh>
            <axesHelper />
            <OrbitControls />
            </Canvas>
            <h1>A R3F Tutorial</h1>
            </>
        )
    }
}

export default App;