import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";

const CertificationCard = ({
  index,
  title,
  issuer,
  date,
  image,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 0.75)}
    className="bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full"
  >
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-contain mb-4"
    />

    <h3 className="text-white text-[20px] font-bold">{title}</h3>

    <p className="text-secondary text-[14px] mt-1">
      Issued by {issuer}
    </p>

    <p className="text-secondary text-[12px] mt-1">
      {date}
    </p>

    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 text-sm mt-3 inline-block"
      >
        View Certificate →
      </a>
    )}
  </motion.div>
);

const Certfications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Learning Journey</p>
          <h2 className={styles.sectionHeadText}>Certfications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certfications, "certifications");
