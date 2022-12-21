import React, { FC } from "react";

import FormContact from "../../components/FormContact";

import styles from "./index.module.scss";

const About: FC = () => {
  return (
    <div className={styles.container}>
      <FormContact />
    </div>
  );
};

export default About;
