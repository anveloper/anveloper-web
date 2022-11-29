import React from "react";
import useLocalStorage from "use-local-storage";
import styles from "../styles/Home.module.css";

const Home = () => {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={styles.container} data-theme={theme}>
      <p>Anveloper Web</p>
      <button onClick={switchTheme} className={styles.themeBtn}>
        Switch to {theme === "light" ? "dark" : "light"} Theme
      </button>
    </div>
  );
};

export default Home;

