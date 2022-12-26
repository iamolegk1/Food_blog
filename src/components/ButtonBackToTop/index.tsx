import React, { FC, useEffect, useState } from "react";
import { HiArrowCircleUp } from "react-icons/hi";

import styles from "./index.module.scss";

const ButtonBackToTop: FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <HiArrowCircleUp onClick={scrollToTop} className={styles.root} />
      )}
    </>
  );
};

export default ButtonBackToTop;
