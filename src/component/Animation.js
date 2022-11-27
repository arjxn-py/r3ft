import React from 'react';
import {useFrame} from '@react-three/fiber'

function MyAnimatedBox() {
    useFrame(({ clock }) => {
        mybox.current.rotation.x = clock.getElapsedTime();
        mybox.current.rotation.y = clock.getElapsedTime();
        mybox.current.rotation.z = clock.getElapsedTime()
    })
  const mybox = React.useRef();
  return (
    <mesh ref={mybox}>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  )
}

export default MyAnimatedBox;