import { Canvas } from '@react-three/fiber';
import React, {Component} from 'react';
import Pattern from './component/BasicPattern';
// import MyAnimatedBox from './component/Animation';
import { Html } from "@react-three/drei";
import Globe from 'worldwind-react-globe';

class App extends Component {
    render() {

        return (
            <>
            <h1>A R3F Tutorial</h1>
                <Globe />
            <Canvas>
            <mesh>
            <Html>
            </Html></mesh>
            <Pattern />
            {/* <MyAnimatedBox /> */}
            </Canvas>
            </>
        )
    }
}

export default App;