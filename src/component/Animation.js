import React from 'react';
import {useFrame} from '@react-three/fiber'

function MyAnimatedBox() {
    useFrame(({ clock }) => {
        mybox.current.rotation.x = clock.getElapsedTime();
        mybox.current.rotation.y = clock.getElapsedTime();
        mybox.current.rotation.z = clock.getElapsedTime();
    })
  const mybox = React.useRef();
  return (
    <mesh ref={mybox}>
      <boxGeometry/>
      <pointLight position={[10, 10, 10]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  )
}

export default MyAnimatedBox;