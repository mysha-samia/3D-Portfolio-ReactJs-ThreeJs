import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Preload,useGLTF } from '@react-three/drei';
import CanvasLoader from "../Loader";

const Earth = () => {
  //passing the 3D models using giltf
  const earth =useGLTF('/planet/scene.gltf')
  return (
    // premiotive tag to render the earth 3d model
    <primitive object={earth.scene}
    // scale is to make it bigger in size
    scale={2.5}
    position-y ={0}
    rotation-y={0}
    />
  )
}
const EarthCanvas =()=>{
  return(
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    camera={{
      fov:45,
      near:0.1,
      far:200,
      position:[-4,3,6]
    }}> 
    {/* fov to make it bigger */}
    {/* suspense will ensure that while our model is loading there will be something to show    */}
    <Suspense fallback={<CanvasLoader/>}>
    {/* theorugh orbit-controls we can move our objects */}
    <OrbitControls  
    autoRotate
    enableZoom={false}
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2}
    />
    <Earth/>
    </Suspense>
    </Canvas>
  )
}

export default EarthCanvas