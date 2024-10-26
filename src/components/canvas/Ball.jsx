// import React from 'react';
// import { Suspense,useEffect,useRef } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal,Float,OrbitControls,Preload,useTexture} from '@react-three/drei';
// import CanvasLoader from '../Loader';
// const Ball = (props) => {
//   const [decal]= useTexture([props.imgUrl]);
//   return (
    
//  <Float>
//   <mesh>
//   <sphereGeometry args={[1, 32, 32]} />
//         <meshStandardMaterial attach="material" map={decal} />
//   </mesh>
//   </Float>
//   )
// };
// // const isWebGLAvailable = () => {
// //   const canvas = document.createElement('canvas');
// //   const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
// //   return !!(gl && gl.getExtension('WEBGL_compressed_texture_s3tc'));
// // };
// const BallCanvas =({icon}) =>{
//   // const webGLAvailable = isWebGLAvailable();
//   // const canvasRef = useRef();

//   // useEffect(() => {
//   //   // Cleanup function to remove WebGL context
//   //   return () => {
//   //     if (canvasRef.current) {
//   //       const gl = canvasRef.current.getContext('webgl');
//   //       if (gl) {
//   //         gl.getExtension('WEBGL_lose_context').loseContext();
//   //       }
//   //     }
//   //   };
//   // }, []);
//   // if (!webGLAvailable) {
//   //   return <div>Your browser does not support WebGL. Please use a different browser or enable hardware acceleration.</div>;
//   // }
//   return (
//     <Canvas
//     frameloop="demand" // This makes it render only when needed
//     shadows
//     gl={{ preserveDrawingBuffer: true }}
//     camera={{ position: [0, 0, 5], fov: 50 }}
//     >
//       {/* Suspense allows the loader to be displayed while the 3D model is loading */}
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           // To rotate around specific angles, we use maxPolarAngle and minPolarAngle
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Ball imgUrl={icon}/>
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

// export default BallCanvas


import React, { Suspense, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal,Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
     <ambientLight intensity={0.25}/>
     <directionalLight position={[0,0,0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal
        position={[0,0,1]}
        //mirror reflect
        rotation ={[2*Math.PI,0,6.25]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => (

  // Use useMemo to ensure only one Canvas is created

    <Canvas
      frameloop="demand" // This makes it render only when needed
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  )

export default BallCanvas;

