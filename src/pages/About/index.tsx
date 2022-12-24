import React, { FC } from "react";
import { motion } from "framer-motion";

import { ReactComponent as About1 } from "../../assets/image/aboutPage/amico.svg";
import { ReactComponent as About2 } from "../../assets/image/aboutPage/rafiki.svg";
import { ReactComponent as About3 } from "../../assets/image/aboutPage/bro.svg";
import { ReactComponent as About4 } from "../../assets/image/aboutPage/pana.svg";

import FormContact from "../../components/FormContact";

import styles from "./index.module.scss";

const About: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.formWrapper}>
        <About1 className={styles.logo} />
        <About2 className={styles.logo2} />
        <About3 className={styles.logo3} />
        <About4 className={styles.logo4} />
        <FormContact />
      </div>
    </motion.div>
  );
};

export default About;
