import Head from "next/head";
import Content from "../components/home/Content";
import Layout from "../components/Layout";
import NextHead from "../components/NextHead";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>안밸로퍼 웹</title>
        <meta
          name="description"
          content="안밸포퍼 포트폴리오 | Anveloper portfolio"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Content />
    </Layout>
  );
}
