import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] shadow-card rounded-2xl"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 400,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt="icon" className="w-16 h-16 object-contain" />
          <h3 className="text-white font-bold text-center text-[20px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary leading-[30px] max-w-3xl text-[17px]"
      >
       Hello, I’m Salman, a passionate Full-Stack Developer skilled in Java/Spring Boot, Angular, and Python. With expertise in OOP, data structures, and microservices, I build dynamic web applications and robust back-end systems. Proficient in front-end technologies (HTML, CSS, JavaScript, Bootstrap) and tools like Git/GitHub, I also have experience in Machine Learning and data analysis. Currently seeking a final-year internship (PFE) starting February 2025, I’m ready to contribute to innovative projects with my technical skills and problem-solving mindset.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")
