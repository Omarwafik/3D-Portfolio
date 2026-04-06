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
import useIsMobile from './Hooks/userIsMobile';
import MobileTech from './MobileTech/MobileTech';
import Footer from './Footer/Footer';

const Home =()=> {
  const isMobile = useIsMobile();
  return (
    <>
      <Hero/>
      <About/>
      <Hr/>
      <Experience/>
      <Hr/>
      {
       isMobile?<MobileTech/>: <Tech/>
      }
      <Work/>
      <Hr/>
      <Contact/>
      <Footer/>
 
    </>
  )
}
export default Home;