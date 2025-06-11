import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Simple analytics initialization without external dependencies
const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) {
    console.warn('Missing Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }
  // Analytics initialization would go here
};

initGA();

createRoot(document.getElementById("root")!).render(<App />);