import React from 'react';
import {OrbitControls} from '@react-three/drei';
import {useFrame} from '@react-three/fiber';
// import * as THREE from "three";

function Box(props){
  const x = props.x;
  const y = props.y;
  const z = props.z;

  return <>
    <mesh position={[x,y,z]}>
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color="yellow"/>
    </mesh>
  </>
}


const BasicPattern = () => {
  return (
    <>
    <pointLight position={[10, 10, 10]} />
    {/* <primitive object={new THREE.AxesHelper(5)} /> */}
    <mesh position={[0,0,0]}>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
    <Box x={-1} y={-1} z={-1}/>
    <Box x={-2} y={-2} z={-2}/>
    <Box x={-3} y={-3} z={-3}/>

    <Box x={1} y={-1} z={-1}/>
    <Box x={2} y={-2} z={-2}/>
    <Box x={3} y={-3} z={-3}/>

    <Box x={-1} y={1} z={-1}/>
    <Box x={-2} y={2} z={-2}/>
    <Box x={-3} y={3} z={-3}/>

    <Box x={-1} y={-1} z={1}/>
    <Box x={-2} y={-2} z={2}/>
    <Box x={-3} y={-3} z={3}/>

    <Box x={-1} y={1} z={1}/>
    <Box x={-2} y={2} z={2}/>
    <Box x={-3} y={3} z={3}/>

    <Box x={1} y={-1} z={1}/>
    <Box x={2} y={-2} z={2}/>
    <Box x={3} y={-3} z={3}/>

    <Box x={1} y={1} z={-1}/>
    <Box x={2} y={2} z={-2}/>
    <Box x={3} y={3} z={-3}/>

    <Box x={1} y={1} z={1}/>
    <Box x={2} y={2} z={2}/>
    <Box x={3} y={3} z={3}/>
    <OrbitControls />
    </>
  )
}

const Pattern = () => {
  // useFrame(({ clock }) => {
  //   pattern.current.rotation.x = clock.getElapsedTime();
  //   pattern.current.rotation.y = clock.getElapsedTime();
  //   pattern.current.rotation.z = clock.getElapsedTime();
  // })
  // const pattern = React.useRef();
  return <BasicPattern/>
}
export default Pattern;