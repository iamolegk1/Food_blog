import React, { FC } from "react";
import { motion } from "framer-motion";

import { MSearch } from "../../components/Search";
import { MFilter } from "../../components/Filter";
import ListRecipes from "../../components/ListRecipes";

import styles from "./index.module.scss";

const Recipes: FC = () => {
  const blockAnimation = {
    hidden: (custom: number) => ({
      x: custom,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.3, duration: 0.6 },
    },
  };

  return (
    <motion.div initial="hidden" whileInView="visible">
      <div className={styles.filterWrapper}>
        <MSearch custom={-30} variants={blockAnimation} />
        <MFilter custom={30} variants={blockAnimation} />
      </div>
      <div className={styles.listWrapper}>
        <ListRecipes />
      </div>
    </motion.div>
  );
};

export default Recipes;
