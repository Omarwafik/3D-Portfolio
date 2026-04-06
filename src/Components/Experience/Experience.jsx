import {motion} from 'framer-motion'
  import { VerticalTimeline } from 'react-vertical-timeline-component'
  import 'react-vertical-timeline-component/style.min.css'
  import { learnExperiences } from '../../info'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import useIsMobile from '../Hooks/userIsMobile'
const Experience = () => {
    const isMobile =useIsMobile()

  return (
    <>
      <div id="learn" className='scroll-mt-8 flex  flex-col justify-around gap-10 py-13  mb-5'>
        <div className='flex flex-col items-start sm:ml-30 md:ml-10 lg:ml-40 '>
          <motion.div 
            initial={{opacity:0,y:0}}
            whileInView={{opacity:1,y:30}}
            viewport={{once:true}}
            transition={{type:'spring',duration:1 , delay:.3}}
            className='ps-7'
            >
            <p className='uppercase tracking-[10px] opacity-50 text-[12px] sm:text-[15px]'>what i learnt</p>
            <h2 className='text-[30px] sm:text-[40px] font-black uppercase tracking-[8px]'>learning experience</h2>
          </motion.div>
        </div>
        
        <div className="mt-20 flex flex-col sm:ps-2 md:ps-5">
          <VerticalTimeline>
              <ExperienceCard data={ learnExperiences}/>

          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default Experience
