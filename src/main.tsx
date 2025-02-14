import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TranslationProvider } from "./contexts/TranslationContext.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </StrictMode>
);
