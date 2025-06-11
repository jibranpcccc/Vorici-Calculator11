import { createRoot } from "react-dom/client";
import "./index.css";

// Simple test component to verify React is working
function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      color: '#d4af37', 
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>React is Working</h1>
      <p>Testing basic functionality...</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<TestApp />);
} else {
  console.error("Root element not found");
}
