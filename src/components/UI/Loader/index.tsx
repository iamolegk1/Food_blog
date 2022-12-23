import React, { FC } from "react";

import loadingGif from "../../../assets/image/waiting.gif";

import styles from "./index.module.scss";

const Loader: FC = () => (
  <div className={styles.root}>
    <img src={loadingGif} alt="wait until the page loads" />
  </div>
);

export default Loader;
