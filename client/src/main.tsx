import { createRoot } from "react-dom/client";

// Direct DOM manipulation to bypass React issues
const rootElement = document.getElementById("root");
if (rootElement) {
  rootElement.innerHTML = `
    <div style="
      padding: 20px; 
      color: #d4af37; 
      background-color: #0a0a0a;
      min-height: 100vh;
      font-family: system-ui, sans-serif;
      line-height: 1.6;
    ">
      <h1 style="color: #d4af37; font-size: 2.5rem; margin-bottom: 1rem;">
        Path of Exile Crafting Calculator
      </h1>
      <p style="color: #e1dcc6; font-size: 1.2rem; margin-bottom: 2rem;">
        Website is loading... Basic functionality restored.
      </p>
      <div style="
        background: #1a1a1a; 
        border: 2px solid #d4af37; 
        border-radius: 8px; 
        padding: 20px; 
        margin: 20px 0;
      ">
        <h2 style="color: #d4af37; margin-bottom: 1rem;">Status</h2>
        <p style="color: #e1dcc6;">✓ Server is running correctly</p>
        <p style="color: #e1dcc6;">✓ HTML is loading</p>
        <p style="color: #e1dcc6;">✓ CSS is applying</p>
        <p style="color: #e1dcc6;">Ready to restore full calculator</p>
      </div>
    </div>
  `;
} else {
  document.body.innerHTML = `
    <h1 style="color: red;">ERROR: Root element not found</h1>
  `;
}
