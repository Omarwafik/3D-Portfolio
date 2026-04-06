import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useIsMobile from "../Hooks/userIsMobile";

const ExperienceCard = ({ data }) => {
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
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", duration: 1.5 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      viewport={{once:true}}

    >
      {data.map((item, index) => (
        <motion.div variants={cardVariants} initial="hidden"
        whileInView="show" key={index} 
                viewport={{once:true}}

        className="mb-10">
          <VerticalTimelineElement
          position={index%2===0?"left":"right"}
            contentStyle={{
              background: "#1d1836",
              color: "#fff",          
              
            }}
            contentArrowStyle={{ borderRight: "7px solid #232631" }}
            date={item.date}
            iconStyle={{ background: item.iconBg }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[100%] h-[100%] rounded-4xl"
                />
              </div>
            }
          >
            <h3 className="text-white text-[24px] font-bold capitalize">{item.title}</h3>
            <ul className="mt-3 list-disc ml-5 space-y-2 capitalize">
              {item.points.map((point, index) => (
                <li
                  key={index}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ExperienceCard;
