import { Canvas } from '@react-three/fiber';
import React, {Component} from 'react';
// import BasicPattern from './component/BasicPattern';
import MyAnimatedBox from './component/Animation';

class App extends Component {
    render() {

        return (
            <>
            <h1>A R3F Tutorial</h1>
            {/* <BasicPattern /> */}
            <Canvas>
            <MyAnimatedBox />
            </Canvas>
            </>
        )
    }
}

export default App;