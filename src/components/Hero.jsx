import { motion } from "framer-motion";

import { styles } from "../styles";
import { profilePhoto } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex-1 flex flex-col md:flex-row items-center gap-8'>
          <div className='flex-1'>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Abdullah Ahmed</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A Backend Developer passionate about <br className='sm:block hidden' />
              building scalable RESTful APIs and <br className='sm:block hidden' />
              server-side applications
            </p>
          </div>
          <div className='flex-shrink-0'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='relative'
            >
              <div className='w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg shadow-[#915EFF]/50'>
                <img
                  src={profilePhoto}
                  alt='Abdullah Ahmed'
                  className='w-full h-full object-cover'
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
