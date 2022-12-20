import React, { FC } from "react";

import loadingGif from "../../../assets/waiting.gif";

import styles from "./index.module.scss";

const Loader: FC = () => (
  <img
    className={styles.root}
    src={loadingGif}
    alt="wait until the page loads"
  />
);

export default Loader;
