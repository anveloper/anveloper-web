import Head from "next/head";
import React from "react";

type NextHeadConfig = { title: String; content: String; description: String };

const NextHead = ({ title, content, description }: NextHeadConfig) => {
  return (
    <Head>
      <title>안밸로퍼 웹 | {title}</title>
      <meta
        name="description"
        content={`안밸포퍼 ${content} | Anveloper ${description}`}
      />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  );
};

export default NextHead;
