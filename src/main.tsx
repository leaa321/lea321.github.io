import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { MyRouter } from "./components/MyRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyRouter />
  </StrictMode>,
);
