import {motion} from 'framer-motion'
import { EarthCanvas } from '../Canvas'
import StarsCanvas from '../Stars/Stars'
import {useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
const Contact = () => {

  const formRef =useRef();
  const [form , setForm]=useState({
    Name:"",
    Email:"",
    Message:"",
  });
  const [loading , setLoading]=useState(false);
  const Change=(e)=>{
    const {target} = e;
    const {name , value} = target;
    setForm({...form , [name]:value})
  }
  const Submit = (e) =>{
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_4o5q0jo',
      'template_n9s9zb5',
      {
        name: form.Name,
        email: form.Email,
        message: form.Message,
        time: new Date().toLocaleString() 
      },
      'tnfXpHh7kVu2vPZ_C'
    ).then(()=>{
      setLoading(false)
      alert("Thank You!, I will Get in Touch as soon as Possible.")
      
      setForm({
      Name:'',
      Email:'',
      Message:'',
    })
    },(error)=>{
      setLoading(false)
      console.log(error)
      alert("somethin went wrong")
    })
   
  }

  return (
    <>
      <div id='contact' className={'relative scroll-m-20  flex  lg:flex-row flex-col-reverse gap-5 p-5 sm:p-10 bg-neutral-950 z-10'} 
      >
        <StarsCanvas />
        <motion.div
        initial={{opacity:0,x:-20}}
        whileInView={{opacity:1,x:0}}
        transition={{type:'spring',duration:1.4 , delay:.8}}
        className=' w-full max-w-[600px] mx-auto xl:flex-[0.50] bg-black p-8   rounded'
        >    <p className='uppercase tracking-[10px] opacity-50 text-[12px] sm:text-[15px]'>get in touch</p>
            <h2 className='text-[30px] sm:text-[40px] font-black uppercase tracking-[8px]
            '>Contact.</h2>

            <form ref={formRef} onSubmit={Submit}>
              <label className='flex flex-col '>
                <span>Your Name</span>
                <input type="text"
                name='Name'
                value={form.Name}
                onChange={Change}
                placeholder="What's your name?"
                className='bg-blue-950 placeholder:text-gray-500 p-3 rounded my-3 font-medium'
                />
              </label>
              <label className='flex flex-col my-3'>
                <span>Your Email</span>
                <input
                type="email"
                name='Email'
                value={form.Email}
                onChange={Change}
                placeholder="What's your Email?"
                className='bg-blue-950 placeholder:text-gray-500 p-3 rounded my-3 font-medium'
                />
              </label>
              <label className='flex flex-col my-3'>
                <span>Your Message</span>
                <textarea 
                name='Message'
                value={form.Message}
                onChange={Change}
                rows={5}
                placeholder="What do you want to say?"
                className='bg-blue-950 placeholder:text-gray-500 p-3 rounded my-3 font-medium outlined-none border-none'
                />
              </label>
              <div className="w-full flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-700 hover:bg-blue-950 text-white font-bold py-2 px-6 rounded cursor-pointer transition "
                >
                  {loading ? "sending" :"Send"}
                </button>
              </div>
            </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }} 
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          className=" xl:flex-[.50] xl:h-auto md:h-[550px] h-[370px]"
          >
            <EarthCanvas />
        </motion.div>
      </div>
      
    </>
  )
}

export default Contact
