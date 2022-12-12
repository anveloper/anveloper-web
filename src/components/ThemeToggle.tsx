import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import styles from "../styles/components/ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme !== "light" ? (
        <button className={styles.lightBtn} onClick={() => setTheme("light")}>
          <BsFillSunFill />
        </button>
      ) : (
        <button className={styles.darkBtn} onClick={() => setTheme("dark")}>
          <BsFillMoonStarsFill />
        </button>
      )}
    </>
  );
};

export default ThemeToggle;
