import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
