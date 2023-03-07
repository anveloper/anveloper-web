import { Outlet } from "react-router-dom";

import styles from "styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      Projects Page
      <Outlet />
    </div>
  );
};

export default Projects;
