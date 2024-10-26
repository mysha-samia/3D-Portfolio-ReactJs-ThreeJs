import React from 'react';
import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
  const ref = useRef();
  // now to rotate the stars we will use useframe from react three fibre
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  // to move the stars
  //  useFrame hook allows you to execute code on every rendered frame, like running effects, updating controls, and so on. 
  useFrame((state, delta) => {
    //useframe to rotate something frame by frmaee
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 10;
    // USEFRAME is a hook provided by React Three Fiber that allows you to execute code on every frame, making it ideal for animations.
    // delta: Represents the time in seconds since the last frame
  });
  return (
    // <group>: This is a wrapper in React Three Fiber
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* rotation={[0, 0, Math.PI / 4]}: The rotation prop takes an array [x, y, z] */}
      <Points ref={ref}
        positions={sphere} stride={3} frustumCulled {...props}>
        {/* stride={3}: Defines the number of array elements per point. Since each point is represented by three values (x, y, z), */}
        {/* positions={sphere}: This prop sets the positions of each point in 3D space. The sphere array you mentioned earlier, 
    created with random.inSphere(), likely holds the x, y, z coordinates for each point. This would make each point randomly placed within a spherical volume. */}
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          // sizeAttenuation={true}: Enables size attenuation, meaning that points appear smaller as they move further from the camera.
          depthWrite={false} />
          {/* depthWrite={false}, overlapping points are less likely to interfere visually, */}
      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
          <Preload all />
          {/* The <Preload all /> component in React Three Fiber is used to preload assets such as textures, models, and materials to ensure they are fully loaded before they are displayed in the scene */}
        </Suspense>
      </Canvas>
    </div>
  )
}
export default StarsCanvas