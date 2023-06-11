import { Outlet } from "react-router-dom";
import styles from "styles/Demo.module.css";

const Demo = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};

export default Demo;
