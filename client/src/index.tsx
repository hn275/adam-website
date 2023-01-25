import React from "react";
import ReactDOM from "react-dom/client";

import { CartCtxProvider } from "modules/contexts/cart";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "themes";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CartCtxProvider>
          <App />
        </CartCtxProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
