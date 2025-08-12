import { StrictMode } from "react";

import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import SmoothScrollWrapper from "./components/lenis.ts";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <SmoothScrollWrapper>
        <App />
      </SmoothScrollWrapper>
    </BrowserRouter>
  </StrictMode>
);
