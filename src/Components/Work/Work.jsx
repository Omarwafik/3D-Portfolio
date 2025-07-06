import React from 'react'
import {motion} from 'framer-motion'
import { projects } from '../../info'
import WorkCard from '../WorkCard/WorkCard'
const Work = () => {
  return (
    <>
       <div  className={` w-full flex  flex-col justify-around gap-10 py-5  mb-5`}>
        <div className='flex flex-col items-center sm:items-start  md:ml-20 lg:ml-40 '>
          <motion.div 
          initial={{opacity:0,y:-30}}
          whileInView={{opacity:1,y:0}}
          // viewport={{once:true}}
          transition={{type:'spring',duration:1 , delay:.3}}
          className='p-3'
          >
            <p className='uppercase tracking-[10px] opacity-50 text-[15px]'>my work</p>
            <h2 className='text-[40px] font-black uppercase tracking-[8px]'>projects.</h2>
          </motion.div>
          <motion.p
            initial={{opacity:0,x:-30}}
            whileInView={{opacity:1 ,x:10}}
            // viewport={{once:true}}
            transition={{type:'spring',duration:1,delay:.5}}
            className='capitalize max-w-[315px]  sm:max-w-xl mt-3 text-[13px] sm:text-[16px]  sm:py-4 md:p-0 '>The following projects showcase my skills and experience through various tasks and challenges I’ve tackled — whether through courses or personal initiatives. Each project includes a brief description along with links to its source code and live demo. They reflect my ability to solve complex problems, adapt to different technologies, and manage projects efficiently.
          </motion.p>
        </div>
      </div>
        <WorkCard data={projects}/>
    </>
  )
}

export default Work
