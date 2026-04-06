import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../../info';
import style from './MobileTech.module.css';
import useIsMobile from '../Hooks/userIsMobile';

const MobileTech = () => {
    const isMobile =useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.2,
        staggerChildren: 0.15,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 0.8 },
    },
  };



  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className="flex flex-col bg-blue-950 justify-center mx-auto rounded  my-5 max-w-[270px] sm:max-w-[500px]"
    >
      <motion.h1 variants={cardVariants} 
      viewport={{once:true}}
      className={`${style.h1} text-[22px] p-5 bg-red-500 rounded text-white  w-full text-center`}>
        Web Development
      </motion.h1>
      <motion.ul variants={containerVariants} 
        viewport={{once:true}}
        className="flex flex-col  text-white">
        {technologies.map((tech, index) => (
          <motion.li key={index} variants={cardVariants} className="text-sm text-center px-8 py-3 w-full relative">
            {tech.name}
            <img src={tech.icon} alt="" className='absolute top-[10px] left-10 w-[22px] h-[22px] rounded-xl' />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MobileTech;
