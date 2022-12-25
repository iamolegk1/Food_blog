import React, { FC } from "react";
import { motion } from "framer-motion";

import { ReactComponent as Contact1 } from "../../assets/image/aboutPage/amico.svg";
import { ReactComponent as Contact2 } from "../../assets/image/aboutPage/rafiki.svg";
import { ReactComponent as Contact3 } from "../../assets/image/aboutPage/bro.svg";
import { ReactComponent as Contact4 } from "../../assets/image/aboutPage/pana.svg";

import FormContact from "../../components/FormContact";

import styles from "./index.module.scss";

const Contact: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <div className={styles.formWrapper}>
        <Contact1 className={styles.logo} />
        <Contact2 className={styles.logo2} />
        <Contact3 className={styles.logo3} />
        <Contact4 className={styles.logo4} />
        <FormContact />
      </div>
    </motion.div>
  );
};

export default Contact;
