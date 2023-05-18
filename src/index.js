import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { GlobalStyle } from "./styles/gobalStyle";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers/providers";
import { TechProvider } from "./providers/TechContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Providers>
        <TechProvider>
          <App />
        </TechProvider>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
