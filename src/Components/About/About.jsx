import {motion} from 'framer-motion'
import Cards from '../Cards/Cards'
import {info} from '../../info'

const About=()=> {
  return <>
  <div id='about' className='scroll-mt-20 flex  flex-col justify-around gap-10 py-13  mb-5'>
      <div className='flex flex-col items-start sm:ml-30 md:ml-10 lg:ml-40 '>
        <motion.div 
        initial={{opacity:0,y:0}}
        whileInView={{opacity:1,y:30}}
        // viewport={{once:true}}
        transition={{type:'spring',duration:1 , delay:.3}}
        className='ps-7'
        >
          <p className='uppercase tracking-[10px] opacity-50 text-[15px]'>Introduction</p>
          <h2 className='text-[40px] font-black uppercase tracking-[8px]'>Overview</h2>
        </motion.div>
        <motion.p
          initial={{opacity:0,x:-30}}
          whileInView={{opacity:1 ,x:20}}
          // viewport={{once:true}}
          transition={{type:'spring',duration:1,delay:.5}}
          className='capitalize max-w-[290px] p-2 sm:max-w-lg  mt-10  text-[12px] sm:text-[15px] sm:ps-3 sm:py-4 md:p-0'>I'm a passionate front-end developer with solid knowledge of web fundamentals and nearly a year of experience in this field. I'm a quick and dedicated self-learner who continuously improves through hands-on practice. Let's work together to bring your ideas to life with clean, efficient, and user-focused solutions!
        </motion.p>
      </div>
      <Cards data={info}/>
  </div>
  </>
  
}
export default About;
