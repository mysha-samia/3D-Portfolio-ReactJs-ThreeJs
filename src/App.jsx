// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { div } from 'framer-motion/client'
// inside app.jsx we need to import all the components.

//for routing
import { BrowserRouter } from "react-router-dom";
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from './components';

const App = () =>{
  return (
    // Browser Router achieves this by actively listening to changes in the browser’s URL.
    // To use the BrowserRouter component in your React application, you typically wrap your entire application or a specific part of it with the BrowserRouter component.
    // By wrapping your application with BrowserRouter, you enable client-side routing for all child components within the router
<BrowserRouter>
<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
  </div>
  <About/>
  <Experience/>
  <Tech/>
  <Works/>
  <Feedbacks/>
  {/* //we want to have a star canvas */}
  <div className="relative z-0">
    <Contact/>
    <StarsCanvas/>
  </div>
 </div>
</BrowserRouter>
 
  )
}

export default App;
