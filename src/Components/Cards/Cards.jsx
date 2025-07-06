import React from 'react'
import style from './Cards.module.css'
import {delay, motion} from 'framer-motion'
import  Tilt  from 'react-parallax-tilt';

const Cards = ({data}) => {
  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5, 
      
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: "spring", duration: 1 } },
};

  return (
     <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"show"}
    //  viewport={{once:true}}
      className='flex gap-10 justify-center items-center p-5 flex-wrap'
    >
      {
      data.map((item, index) => (
        <Tilt key={index}
        >
        <motion.div
          variants={cardVariants}
          key={index}
          className={`${style.cardsBg} flex flex-col p-4 min-h-[200px] min-w-[200px] rounded-2xl items-center group`}
          >
          <img
            src={item.icon}
            className='w-[100px] h-[100px] group-hover:scale-110 transition duration-150'
            alt=""
            />
          <p className='mt-auto p-2'>{item.title}</p>
        </motion.div>
      </Tilt>
      ))}
    </motion.div>
  )
}

export default Cards

// options={{
//   max: 90,              // أقصى ميل 25 درجة
//   scale: 1.05,          // زووم خفيف أثناء الحركة
//   speed: 10,           // يرجع بسرعة 400ms
//   glare: true,          // يفعل تأثير اللمعة
//   perspective: 1000     // عمق التأثير
// }}