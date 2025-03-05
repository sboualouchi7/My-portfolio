import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX}
        absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7f4ded]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Im <span className="text-[#7f4ded]">Adam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack web applications{" "}
            <br className="sm:block hidden" /> and design user interfaces.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute sm:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
