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
        Hello i’m Adam a Passionate Full stack developer with a strong
        foundation in C++, having solved 300+ algorithms and mastered concepts
        like OOP and data structures. Proficient in SQL, front-end technologies
        (HTML, CSS, JavaScript, Bootstrap, Tailwind, Vue.js, React.js) also Git
        plus Github, and experienced in building dynamic web projects. Skilled
        in Laravel + php for back-end development, including CRUD, database
        relationships, and role management.
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
