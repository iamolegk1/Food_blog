import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./index.module.scss";

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentWidth = window.innerWidth;

  const menuToggleHandler = () => {
    setMenuOpen((condition) => !condition);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <Link to="/" className={styles.header__logo}>
          foodBlog
        </Link>
        <nav
          className={`${styles.header__nav} ${
            menuOpen && currentWidth < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/recipes" onClick={menuToggleHandler}>
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.header__hamburger}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />
          ) : (
            <FaHamburger onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
