import Head from "next/head";
import Layout from "../components/Layout";

const projects = () => {
  return (
    <Layout>
      <Head>
        <title>안밸로퍼 웹</title>
        <meta
          name="description"
          content="안밸포퍼 프로젝트 | Anveloper projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      projects
    </Layout>
  );
};

export default projects;
