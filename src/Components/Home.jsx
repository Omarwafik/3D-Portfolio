import React from 'react'
import Hero from './Hero/Hero';
import Computers from './Canvas/Computers';
import About from './About/About';
import Experience from './Experience/Experience';
import Tech from './Tech/Tech';
import { motion } from 'framer-motion';
import Hr from './Hr/Hr';
import Work from './Work/Work';
import Contact from './Contact/Contact';

const Home =()=> {
  return (
    <>
      <Hero/>
      <About/>
      <Hr/>
      <Experience/>
      <Hr/>
      <Tech/>
      <Work/>
      <Hr/>
      <Contact/>
 
    </>
  )
}
export default Home;