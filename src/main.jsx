import React from "react";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { createGlobalStyle as injectGlobalStyle } from 'styled-components';

const GlobalStyle = injectGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    display: flex;
    place-items: center;
    place-content: center;
    min-width: 320px;
    min-height: 100vh;
    background: linear-gradient(to right top, #8e44ad 0%, #3498db 100%);
  }
`

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
