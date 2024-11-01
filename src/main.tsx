 
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/main.scss";
 
import AppRoutes from "./Routes/AppRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
