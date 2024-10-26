import React from 'react';
import { Html,useProgress } from '@react-three/drei';

const Loader = () => {
  const {progress} =useProgress();
  return (
    <Html>
      <span className='canvas-load'>
       <p style={{
        fontSize:14,
        color:"#f1f1f1",
        fontWeight:800,
        marginTop:40
        }}>{progress.toFixed(2)}%</p>
      </span>
    </Html>
  )
}

export default Loader
//Html allows you place plain ol' HTML in your canvas and render it like you would a normal DOM element. 
//useProgress is a hook that gives you a bunch of information about the loading status of your model.
