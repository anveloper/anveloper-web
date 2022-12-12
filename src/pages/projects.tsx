import Head from "next/head";
import Layout from "../components/Layout";
import NextHead from "../components/NextHead";

const projects = () => {
  return (
    <Layout>
      <NextHead
        title={"Projects"}
        content={"프로젝트"}
        description={"projects"}
      />
      projects
    </Layout>
  );
};

export default projects;
