import {technologies} from '../../info'
import {BallCanvas} from '../Canvas';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Preload } from '@react-three/drei';
import {motion} from 'framer-motion'
import useIsMobile from '../Hooks/userIsMobile';



const Tech = () => {
    const isMobile =useIsMobile()

  return (
    <div className='flex flex-col items-center sm:pb-25'>
        
        <motion.h1
        initial={{opacity:0,y:-30}}
          whileInView={{opacity:1 ,y:0}}
        viewport={{once:true}}
          transition={{type:'spring',duration:1,delay:.5}} 
          className=' uppercase text-[30px] sm:text-[60px] py-10 mb-5  '
        >
          my skills
        </motion.h1>
      
      <div className='px-10  md:px-40 flex  flex-wrap justify-center gap-5'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 ' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </div>
    
  )
}
export default Tech