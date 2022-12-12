import React, { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

import styles from "../styles/components/Layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className={styles.layout}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
