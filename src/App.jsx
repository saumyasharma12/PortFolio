import React from 'react'
import NavBar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App