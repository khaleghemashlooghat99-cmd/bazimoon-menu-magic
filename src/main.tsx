import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Self-hosted Vazirmatn (bundled by Vite), so the menu works offline.
import "@fontsource-variable/vazirmatn";
import "./index.css";

window.history.scrollRestoration = "manual";

createRoot(document.getElementById("root")!).render(<App />);
