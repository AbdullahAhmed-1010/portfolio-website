import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName, extraClassName = "") =>
  function HOC() {
    return (
      // <motion.section
      //   variants={staggerContainer()}
      //   initial='hidden'
      //   whileInView='show'
      //   viewport={{ once: true, amount: 0.25 }}
      //   className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${extraClassName}`}
      // >
      //   <span className='hash-span' id={idName}>
      //     &nbsp;
      //   </span>

      //   <Component />
      // </motion.section>
      <motion.section
        id={idName}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 ${extraClassName}`}
      >
        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
