import ReactDOM from "react-dom/client";
import { CartCtxProvider } from "modules/contexts/cart";
import { BrowserRouter } from "react-router-dom";
import { ChakraBaseProvider } from "@chakra-ui/react";
import theme from "config/chakra";
import "./index.css";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraBaseProvider theme={theme}>
    <BrowserRouter>
      <CartCtxProvider>
        <App />
      </CartCtxProvider>
    </BrowserRouter>
  </ChakraBaseProvider>
);
