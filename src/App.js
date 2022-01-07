import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import Orders from "./orders";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from "./AppConfig";

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

const App = () => (
  <ThemeSwitcherProvider
    themeMap={themes}
    defaultTheme={THEME_CONFIG.currentTheme}
    insertionPoint="styles-insertion-point"
  >
    <Orders />
  </ThemeSwitcherProvider>
);

export default App;
