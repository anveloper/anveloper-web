import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/components/Header.module.css";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href={"/"}>
            <Image
              src={"/logo/anveloper_logo_normal.svg"}
              alt={"안밸로퍼 로고"}
              width={48}
              height={48}
            />
          </Link>
          <Link href={"/"}>
            <h2>안밸로퍼 포트폴리오</h2>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href={"/"}>홈</Link>
          <Link href={"/projects"}>프로젝트</Link>
          <a href={"/asdf"}>연락하기</a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
