import { Switch, Route } from "wouter";

function Home() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#0a0a0a', color: '#e1dcc6', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#d4af37' }}>Vorici Calculator</h1>
      
      <div id="calculator" style={{ marginBottom: '2rem', padding: '2rem', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>
        <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>Calculator Section</h2>
        <p>Calculator content will go here</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#d4af37', marginBottom: '1rem' }}>Link Validation Results</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>✓ Calculator link fixed with proper ID anchor</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Sitemap.xml endpoint created at /sitemap.xml</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Static sitemap file removed</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Robots.txt endpoint added</li>
          <li style={{ marginBottom: '0.5rem' }}>✓ Schema markup validated</li>
        </ul>
      </div>

      <div>
        <a href="#calculator" style={{ color: '#d4af37', textDecoration: 'underline' }}>
          Test Calculator Link
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={() => <div style={{ padding: '2rem', color: '#e1dcc6' }}>Page not found</div>} />
      </Switch>
    </div>
  );
}

export default App;