import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme";
import Main from "./pages/Main";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalStyled />
    </ChakraProvider>
    <Router />
  </React.StrictMode>
);
