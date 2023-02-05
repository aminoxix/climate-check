import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";

// Styles
import styled, {
  createGlobalStyle as injectGlobalStyle,
} from "styled-components";

// Context
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";

// Assets
import LightSwitchOn from "./assets/lightswitch-on.png";
import LightSwitchOff from "./assets/lightswitch-off.png";

const GlobalStyle = injectGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    padding: 10px;
    display: flex;
    place-items: center;
    place-content: center;
    min-width: 100vw;
    min-height: 100vh;
    background: ${({ darkMode }) =>
      darkMode
        ? "linear-gradient(to right top, #04619F 0%, #000000 100%)"
        : "linear-gradient(to right top, #8e44ad 0%, #3498db 100%)"};
  }
`;

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
    <DarkModeProvider>
      <DarkModeWrapper />
    </DarkModeProvider>
  </React.StrictMode>
);

function DarkModeWrapper() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <SwitchModeImg
        src={darkMode ? LightSwitchOff : LightSwitchOn}
        onClick={toggleDarkMode}
      />
      <GlobalStyle darkMode={darkMode} />
      <RouterProvider router={router} />
    </>
  );
}

const SwitchModeImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 0;
  cursor: pointer;
  height: 40px;
  width: 40px;
`;
