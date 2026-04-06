import React from 'react'
import { motion } from 'framer-motion';

const Hr = () => {
  return (
    <>
      <motion.hr
        initial={{ width: 0 }}
        viewport={{once:true}}
        whileInView={{width: "75%"}}
        transition={{ duration: 1 }}
        className="m-auto  mb-4"
      />
    </>
  )
}

export default Hr
