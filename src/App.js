import React, {Component} from 'react';
import {Canvas} from '@react-three/fiber'

class App extends Component {
    render() {

        return (
            <Canvas>
            <pointLight position={[10, 10, 10]} />
            <mesh>
              <sphereGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
            </Canvas>
        )
    }
}

export default App;