import { createBrowserRouter, RouterProvider } from "react-router-dom";

// main
import Footer from "components/Footer";
import Header from "components/Header";
import About from "sections/About";
import Contact from "sections/Contact";
import Work from "sections/Work";

// project
import ProjectDetail from "components/ProjectDetail";
import ProjectList from "components/ProjectList";
import Projects from "pages/Projects";

import styles from "styles/App.module.css";
import Demo from "./Demo";
import Mug from "components/Mug";
import Card from "components/Card";

const router = createBrowserRouter([
  {
    path: "",
    element: <>{"⚒️ 공사중 🛠️"}</>,
  },
  {
    path: "t",
    element: (
      <div className={styles.container}>
        <Header />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    ),
  },
  {
    path: "projects",
    element: <Projects />,
    children: [
      {
        path: "",
        element: <ProjectList />,
      },
      {
        path: ":projectId",
        element: <ProjectDetail />,
      },
    ],
  },
  {
    path: "demo",
    element: <Demo />,
    children: [
      { path: "mug", element: <Mug /> },
      { path: "card", element: <Card /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
