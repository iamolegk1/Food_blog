import React, { FC } from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";

import styles from "./index.module.scss";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
