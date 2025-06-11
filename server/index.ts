import express, { type Request, Response, NextFunction } from "express";
import compression from "compression";
import helmet from "helmet";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Minimal headers for development
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve the working calculator directly
app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Path of Exile Crafting Calculator</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            background: #0a0a0a;
            color: #e1dcc6;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .header h1 {
            color: #d4af37;
            font-size: 2.5rem;
            margin-bottom: 10px;
        }
        
        .header p {
            color: #bdbdbd;
            font-size: 1.1rem;
        }
        
        .calculator {
            background: #1a1a1a;
            border: 2px solid #d4af37;
            border-radius: 10px;
            padding: 30px;
            margin-bottom: 30px;
        }
        
        .calculator h2 {
            color: #d4af37;
            margin-bottom: 20px;
            font-size: 1.8rem;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            color: #e1dcc6;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group select,
        .form-group input {
            width: 100%;
            padding: 12px;
            background: #0f0f0f;
            border: 2px solid #444;
            border-radius: 6px;
            color: #e1dcc6;
            font-size: 16px;
        }
        
        .form-group select:focus,
        .form-group input:focus {
            outline: none;
            border-color: #d4af37;
        }
        
        .socket-display {
            display: flex;
            gap: 10px;
            margin: 20px 0;
        }
        
        .socket {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 3px solid #444;
            cursor: pointer;
            transition: all 0.2s;
        }
        
        .socket.red { background: #dc2626; }
        .socket.green { background: #16a34a; }
        .socket.blue { background: #2563eb; }
        .socket.white { background: #f5f5f5; }
        .socket.disabled { background: #333; opacity: 0.5; }
        
        .socket:hover {
            border-color: #d4af37;
            transform: scale(1.1);
        }
        
        .calculate-btn {
            background: #d4af37;
            color: #0a0a0a;
            border: none;
            padding: 15px 30px;
            border-radius: 6px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        
        .calculate-btn:hover {
            background: #b8941f;
        }
        
        .results {
            background: #1e1e1e;
            border: 1px solid #444;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
        }
        
        .results h3 {
            color: #d4af37;
            margin-bottom: 15px;
        }
        
        .result-item {
            margin-bottom: 10px;
            padding: 8px 0;
            border-bottom: 1px solid #333;
        }
        
        .result-item:last-child {
            border-bottom: none;
        }
        
        .tabs {
            display: flex;
            margin-bottom: 30px;
            background: #1a1a1a;
            border-radius: 8px;
            overflow: hidden;
        }
        
        .tab {
            flex: 1;
            padding: 15px;
            background: #2a2a2a;
            color: #bdbdbd;
            border: none;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s;
        }
        
        .tab.active {
            background: #d4af37;
            color: #0a0a0a;
        }
        
        .tab:hover {
            background: #333;
        }
        
        .tab.active:hover {
            background: #b8941f;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Path of Exile Crafting Calculator</h1>
            <p>Calculate socket colors, jeweller costs, and fusing probabilities</p>
        </div>
        
        <div class="tabs">
            <button class="tab active" onclick="switchTab('chromatic')">Chromatic Orbs</button>
            <button class="tab" onclick="switchTab('jeweller')">Jeweller's Orbs</button>
            <button class="tab" onclick="switchTab('fusing')">Orbs of Fusing</button>
        </div>
        
        <div class="calculator">
            <div id="chromatic-tab" class="tab-content">
                <h2>Chromatic Orb Calculator</h2>
                
                <div class="form-group">
                    <label for="item-base">Item Base Type</label>
                    <select id="item-base">
                        <option value="strength">Strength (Red) - Armor</option>
                        <option value="dexterity">Dexterity (Green) - Evasion</option>
                        <option value="intelligence">Intelligence (Blue) - Energy Shield</option>
                        <option value="str-dex">Hybrid Str/Dex</option>
                        <option value="str-int">Hybrid Str/Int</option>
                        <option value="dex-int">Hybrid Dex/Int</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="socket-count">Number of Sockets</label>
                    <select id="socket-count" onchange="updateSockets()">
                        <option value="3">3 Sockets</option>
                        <option value="4" selected>4 Sockets</option>
                        <option value="5">5 Sockets</option>
                        <option value="6">6 Sockets</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Desired Socket Colors (Click to change)</label>
                    <div class="socket-display" id="socket-display">
                        <div class="socket red" onclick="cycleSocket(0)"></div>
                        <div class="socket red" onclick="cycleSocket(1)"></div>
                        <div class="socket green" onclick="cycleSocket(2)"></div>
                        <div class="socket blue" onclick="cycleSocket(3)"></div>
                    </div>
                </div>
                
                <button class="calculate-btn" onclick="calculate()">Calculate Chromatic Cost</button>
            </div>
            
            <div id="jeweller-tab" class="tab-content" style="display: none;">
                <h2>Jeweller's Orb Calculator</h2>
                
                <div class="form-group">
                    <label for="current-sockets">Current Sockets</label>
                    <select id="current-sockets">
                        <option value="1">1 Socket</option>
                        <option value="2">2 Sockets</option>
                        <option value="3">3 Sockets</option>
                        <option value="4" selected>4 Sockets</option>
                        <option value="5">5 Sockets</option>
                        <option value="6">6 Sockets</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="target-sockets">Target Sockets</label>
                    <select id="target-sockets">
                        <option value="1">1 Socket</option>
                        <option value="2">2 Sockets</option>
                        <option value="3">3 Sockets</option>
                        <option value="4">4 Sockets</option>
                        <option value="5">5 Sockets</option>
                        <option value="6" selected>6 Sockets</option>
                    </select>
                </div>
                
                <button class="calculate-btn" onclick="calculateJeweller()">Calculate Jeweller Cost</button>
            </div>
            
            <div id="fusing-tab" class="tab-content" style="display: none;">
                <h2>Orb of Fusing Calculator</h2>
                
                <div class="form-group">
                    <label for="quality">Item Quality (%)</label>
                    <input type="number" id="quality" value="20" min="0" max="30">
                </div>
                
                <div class="form-group">
                    <label for="target-links">Target Links</label>
                    <select id="target-links">
                        <option value="3">3-Link</option>
                        <option value="4">4-Link</option>
                        <option value="5">5-Link</option>
                        <option value="6" selected>6-Link</option>
                    </select>
                </div>
                
                <button class="calculate-btn" onclick="calculateFusing()">Calculate Fusing Cost</button>
            </div>
            
            <div class="results" id="results" style="display: none;">
                <h3>Calculation Results</h3>
                <div id="result-content"></div>
            </div>
        </div>
    </div>
    
    <script>
        let currentTab = 'chromatic';
        let sockets = ['red', 'red', 'green', 'blue'];
        const socketColors = ['red', 'green', 'blue', 'white', 'disabled'];
        
        function switchTab(tab) {
            document.querySelectorAll('.tab-content').forEach(t => t.style.display = 'none');
            document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            
            document.getElementById(tab + '-tab').style.display = 'block';
            event.target.classList.add('active');
            currentTab = tab;
            
            document.getElementById('results').style.display = 'none';
        }
        
        function updateSockets() {
            const count = parseInt(document.getElementById('socket-count').value);
            const container = document.getElementById('socket-display');
            container.innerHTML = '';
            sockets = [];
            
            for (let i = 0; i < count; i++) {
                const socket = document.createElement('div');
                socket.className = 'socket red';
                socket.onclick = () => cycleSocket(i);
                container.appendChild(socket);
                sockets.push('red');
            }
        }
        
        function cycleSocket(index) {
            const currentColor = sockets[index];
            const currentIndex = socketColors.indexOf(currentColor);
            const nextIndex = (currentIndex + 1) % socketColors.length;
            sockets[index] = socketColors[nextIndex];
            
            const socketElement = document.getElementById('socket-display').children[index];
            socketElement.className = \`socket \${socketColors[nextIndex]}\`;
        }
        
        function calculate() {
            const base = document.getElementById('item-base').value;
            const weights = getBaseWeights(base);
            const colorCounts = countColors();
            
            let probability = calculateProbability(weights, colorCounts);
            const averageCost = Math.round(1 / probability);
            
            showResults({
                type: 'Chromatic Orbs',
                averageCost: averageCost,
                probability: (probability * 100).toFixed(4),
                recommendation: averageCost > 100 ? 'Use Crafting Bench' : 'Spam Chromatic Orbs'
            });
        }
        
        function calculateJeweller() {
            const current = parseInt(document.getElementById('current-sockets').value);
            const target = parseInt(document.getElementById('target-sockets').value);
            
            const baseChance = 0.167;
            const attempts = Math.round(1 / baseChance);
            const averageCost = attempts * Math.abs(target - current);
            
            showResults({
                type: "Jeweller's Orbs",
                averageCost: averageCost,
                probability: (baseChance * 100).toFixed(2),
                recommendation: target === 6 ? 'Use Crafting Bench (350 Jewellers)' : 'Spam Jeweller\\'s Orbs'
            });
        }
        
        function calculateFusing() {
            const quality = parseInt(document.getElementById('quality').value);
            const targetLinks = parseInt(document.getElementById('target-links').value);
            
            const baseChance = targetLinks === 6 ? 1/1200 : 
                              targetLinks === 5 ? 1/150 : 1/25;
            
            const qualityBonus = 1 + (quality * 0.01);
            const adjustedChance = baseChance * qualityBonus;
            const averageCost = Math.round(1 / adjustedChance);
            
            const benchCost = targetLinks === 6 ? 1500 : targetLinks === 5 ? 150 : 25;
            
            showResults({
                type: 'Orbs of Fusing',
                averageCost: averageCost,
                probability: (adjustedChance * 100).toFixed(4),
                recommendation: averageCost > benchCost ? 
                    \`Crafting Bench (\${benchCost} Fusings - Guaranteed)\` : 
                    'Spam Orbs of Fusing'
            });
        }
        
        function getBaseWeights(base) {
            const weights = {
                'strength': { red: 100, green: 20, blue: 20 },
                'dexterity': { red: 20, green: 100, blue: 20 },
                'intelligence': { red: 20, green: 20, blue: 100 },
                'str-dex': { red: 60, green: 60, blue: 20 },
                'str-int': { red: 60, green: 20, blue: 60 },
                'dex-int': { red: 20, green: 60, blue: 60 }
            };
            return weights[base];
        }
        
        function countColors() {
            return sockets.reduce((acc, color) => {
                if (color !== 'disabled') {
                    acc[color] = (acc[color] || 0) + 1;
                }
                return acc;
            }, {});
        }
        
        function calculateProbability(weights, colorCounts) {
            const totalWeight = weights.red + weights.green + weights.blue;
            let probability = 1;
            
            for (const [color, count] of Object.entries(colorCounts)) {
                if (count > 0) {
                    const colorWeight = color === 'red' ? weights.red : 
                                      color === 'green' ? weights.green : 
                                      color === 'blue' ? weights.blue : 20;
                    probability *= Math.pow(colorWeight / totalWeight, count);
                }
            }
            
            return probability;
        }
        
        function showResults(data) {
            const results = document.getElementById('results');
            const content = document.getElementById('result-content');
            
            content.innerHTML = \`
                <div class="result-item">
                    <strong>Average Cost:</strong> \${data.averageCost} \${data.type}
                </div>
                <div class="result-item">
                    <strong>Success Chance:</strong> \${data.probability}% per attempt
                </div>
                <div class="result-item">
                    <strong>Recommendation:</strong> \${data.recommendation}
                </div>
            \`;
            
            results.style.display = 'block';
        }
        
        updateSockets();
    </script>
</body>
</html>`);
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Disable Vite to serve our direct calculator
  // if (app.get("env") === "development") {
  //   await setupVite(app, server);
  // } else {
    serveStatic(app);
  // }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
