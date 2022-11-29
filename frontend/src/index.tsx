import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./app/store";
import Home from "./pages/Home";

import "./styles/fonts.css";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);

