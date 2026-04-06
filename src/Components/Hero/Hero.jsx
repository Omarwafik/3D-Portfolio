import { motion} from 'framer-motion';
import style from './Hero.module.css'
import ComputersCanvas from '../Canvas/Computers';
import useIsMobile from '../Hooks/userIsMobile';
import Me from '../Canvas/Me/Me';
// import Boy from '../Canvas/Boy/Boy';


const Hero = () => {
const isMobile = useIsMobile()
  return (
    <section   className={`${isMobile ? style["backHeroMobile"] : style["backHero"]}  w-full h-screen  overflow-hidden relative`}>
        <div className='absolute inset-0 top-[130px] mx-auto px-5 sm:px-18 py-5 flex items-start w-full'>
          <div className='flex flex-col justify-center items-center'>
            <div className='w-[20px] h-[20px] rounded-full bg-purple-600'/>
            <div className={`${style["line-gradient"]} w-[2px] h-[150px] `}/>
          </div>
        <div>
          <h1 className='font-black text-[27px] sm:text-[35px] md:text-[45px]  lg:text-[60px] mx-5'>Hi, I'm <span className='text-purple-500'>Omar</span></h1>
          <p className='font-medium mx-5'>I develop U/I , Websites <br className='sm:hidden block'/> and Web applications .
          </p>
        </div>
          
        </div>
        {
          isMobile?<Me/>:<ComputersCanvas />
        }
        <div className='absolute bottom-5 flex justify-center w-full'>
          <a href="#about">
            <div className='w-[25px] h-[50px] border-2 rounded-4xl flex justify-center items-start '>
              <motion.div
              animate={{y:[0,30,0]}}
              transition={{duration:1,repeat:Infinity,repeatType:'loop'}}
              className='bg-fuchsia-700 w-[10px] h-[10px] rounded-xl  ' 
              />
            </div>
          </a>
        </div>
      </section>

);
};

export default Hero;