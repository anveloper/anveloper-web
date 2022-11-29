import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { store } from "./app/store";
const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([]);

root.render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);
