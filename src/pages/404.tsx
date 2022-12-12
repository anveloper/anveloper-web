import Head from "next/head";
import { NextFetchEvent } from "next/server";
import React from "react";
import Layout from "../components/Layout";
import NextHead from "../components/NextHead";

const PageNotFound = () => {
  return (
    <Layout>
      <NextHead
        title={"Page Not Found"}
        content={"찾을 수 없는 페이지"}
        description={"Page Not Found"}
      />
      <div>
        <h3>페이지를 찾을 수 없습니다.</h3>
      </div>
    </Layout>
  );
};

export default PageNotFound;
