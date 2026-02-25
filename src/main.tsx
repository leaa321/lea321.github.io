import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MyRouter } from "./pages/MyRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyRouter />
  </StrictMode>,
);
