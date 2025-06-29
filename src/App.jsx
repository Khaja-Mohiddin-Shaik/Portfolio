import { useState } from 'react'
import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
function App() {

  return (
  
      <div className='relative'>
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
     
 
  )
}

export default App
