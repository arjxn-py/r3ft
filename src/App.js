import { Canvas } from '@react-three/fiber';
import React, {Component} from 'react';
import Pattern from './component/BasicPattern';
// import MyAnimatedBox from './component/Animation';

class App extends Component {
    render() {

        return (
            <>
            <h1>A R3F Tutorial</h1>
            <Canvas>
            <Pattern />
            {/* <MyAnimatedBox /> */}
            </Canvas>
            </>
        )
    }
}

export default App;