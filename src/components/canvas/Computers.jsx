// import React from 'react'
// //all are related to three js 
// import { Suspense,useEffect,useState } from 'react';
// import {Canvas} from '@react-three/fiber';
// import { OrbitControls,Preload,useGLTF} from '@react-three/drei';
// //USEgltf are used to import 3d models
// import CanvasLoader from '../Loader';
// const Computers = () => {
//   const computer =useGLTF('./desktop_pc/scene.gltf');
//   const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

//   return (
//   // if we are working the 3d elements we will not gonnaa start with div rather we will start with mesh
//   <mesh>
//     {/* //inside a mesh we have to create a light otherwise we wont be able to see anything */}
//     <hemisphereLight intensity={0.15} groundColor="black"/>
//     {/* //creating a point light .these all light are thrree js objects  */}
//     <pointLight intensity={1}/>
//     {/* //primitive will be a self closing component through which we can pass obejcts. */}
//     <primitive object ={computer.scene}/>
//     {/* //yet that we wont see our components . we will see that after we create react 3 fibre components. */}
//   </mesh>
//   )
// }
// const ComputersCanvas = ()=>{
//   return (
//     <Canvas frameLoop="demand"
//      shadows
//      // here camera is most important because here we are seeing the visuals from different angles.
//      //here we have to set positions (x,y,z) fov is the way the view is going to be

//      camera ={{position:[20,3,5] , fov:25}}
//      gl={{preserveDrawingBuffer:true}}>
//        {/* //it is used to properly render ourn 3d model */}
  

//  {/* // suspense is coming from the react.this allows the loader when 3d modeling is loading */}
//  <Suspense fallback={<CanvasLoader/>}>
//  <OrbitControls 
//  enableZoom={false}
//  // to rotatte around the specific angles we use maxpolarnagle and min polar angle
//  maxPolarAngle={Math.PI /2}
//  minPolarAngle={Math.PI /2}
//  />
//  <Computers/>
//  </Suspense>
//  <Preload all />
//     </Canvas>
// )
// }

// export default Computers



import React, { Suspense, useEffect, useState } from 'react';
// all are related to three js 
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
// USEgltf are used to import 3d models
import CanvasLoader from '../Loader';
//here we are taking isMobile as an prop
const Computers = ({isMobile}) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);  

  return (
    // if we are working with 3d elements, we start with mesh instead of div
    <mesh>
      {/* Inside a mesh, we have to create a light, otherwise we won't see anything */}
      <hemisphereLight intensity={1.5} groundColor="black" />
      {/* Creating a point light; these lights are Three.js objects */}
      <pointLight intensity={7.5} />
      {/* primitive is a self-closing component to pass objects */}
      <spotLight position={[-20,50,10]}
      angle={0.3}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1000}/>
      <primitive object={scene} 
      scale={isMobile? 0.65 : 0.75}
      position={isMobile? [0,-3,-2.2]:[0,-3.35,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}/>
    </mesh>
  );
};

const ComputersCanvas = () => {
  //make it responsive on the mobile
  const [isMobile,setIsMobile]= useState(false);
  //use effect is to render the side effects in a functional component means page render howar sathe sathe ey the components needs to do something!
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange =(event)=>{
      setIsMobile(event.matches);
    } 
  mediaQuery.addEventListener("change",handleMediaQueryChange);
  //since we are on the use effect we have to close media query change
  return ()=>{
    mediaQuery.removeEventListener("change",handleMediaQueryChange);
  }
 },[]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      // Set up the camera, position (x, y, z), and fov
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense allows the loader to be displayed while the 3D model is loading */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // To rotate around specific angles, we use maxPolarAngle and minPolarAngle
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

//we have created 3d mesh qith couple of lights and 3d object
//we import the object by using useGLTF and from the public folder we have imported the scene
//sketchfeb the best for 3d models

