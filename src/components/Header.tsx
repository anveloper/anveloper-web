import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import DarkToggleButton from "./DarkToggleButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"}>{"로고 안밸로퍼 웹"}</Link>

        <Link href={"/"}>홈</Link>
        <Link href={"/projects"}>프로젝트</Link>
        <a href={"/asdf"}>연락하기</a>
        <DarkToggleButton />
      </div>
    </header>
  );
};

export default Header;
