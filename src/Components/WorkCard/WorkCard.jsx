import React from 'react'
import {motion} from 'framer-motion'
import  Tilt  from 'react-parallax-tilt';
import  style from './WorkCard.module.css'; 
import  github from '../../assets/github.png'; 
import  play from '../../assets/play-button.png'; 
import { techColors } from '../../info';
import useIsMobile from '../Hooks/userIsMobile';
const WorkCard = ({data}) => {

  const isMobile =useIsMobile()

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", duration: 1.5 },
    },
  };

  return (
    <>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
        viewport={{once:true}}
      className="flex flex-wrap gap-10 justify-center p-4 sm:px-30 mb-20">
        {
          data.map((item , index)=>
            <Tilt>
              <motion.div
                variants={cardVariants}
                        viewport={{once:true}}

                key={index}
                className={`${style.workBg} p-4 w-full min-h-[200px] max-w-[320px] rounded-2xl justify-center `}
                >
                <img
                  src={item.image}
                  className='realtive w-full rounded-lg'
                  alt=""
                  />
                  <div className='absolute top-2 right-2 bg-black rounded-3xl p-1'>
                    <a href={item.source_code_link}
                    target='_blank'>
                      <img src={github} alt="" className='w-[28px] h-[28px]  ' />
                    </a>
                  </div>
                  <div className='absolute top-2 right-11 bg-black rounded-3xl p-1'>
                    <a href={item.live_demo_link}
                    target='_blank'>
                      <img src={play} alt="" className='w-[28px] h-[28px]  rounded-3xl' />
                    </a>
                  </div>
                  <p className='py-2 text-[20px]'>{item.name}</p>
                  <p className='mt-auto  max-w-[270px] opacity-70 text-[11px] sm:text-[14px] leading-[20px]'>{item.description}</p>
                  {
                  item.tags.map((i ,index)=>
                  <span className='mr-3 text-[12px] uppercase'
                  style={{color:techColors[i.name]}}>{i.name}</span>
                    )
                  }
              </motion.div>    
            </Tilt>
          )
        }

      </motion.div>
    </>
  )
}

export default WorkCard