// Simple test app to identify what's breaking
export default function TestApp() {
  return (
    <div style={{ 
      padding: '20px', 
      color: '#d4af37', 
      backgroundColor: '#1a1a1a',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ color: '#d4af37', fontSize: '2rem', marginBottom: '1rem' }}>
        Path of Exile Calculator - Loading Successfully
      </h1>
      <p style={{ color: '#e1dcc6', fontSize: '1.1rem' }}>
        ✓ React is working correctly
      </p>
      <p style={{ color: '#e1dcc6', fontSize: '1.1rem' }}>
        ✓ CSS styles are applying
      </p>
      <p style={{ color: '#e1dcc6', fontSize: '1.1rem' }}>
        ✓ Server connection established
      </p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        border: '2px solid #d4af37',
        borderRadius: '8px',
        backgroundColor: '#0a0a0a'
      }}>
        <h2 style={{ color: '#d4af37', marginBottom: '0.5rem' }}>Status: Ready</h2>
        <p style={{ color: '#e1dcc6' }}>
          The website infrastructure is working. Ready to restore the full calculator application.
        </p>
      </div>
    </div>
  );
}