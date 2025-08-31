export default function HomePage() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1>MyLawManager - Legal AI System</h1>
      <p>Your Nevada Legal AI Practice Management System is now live!</p>
      <h2>Available API Endpoints:</h2>
      <ul>
        <li><a href="/api/health">/api/health</a> - System health check</li>
        <li>/api/ai/chat - Legal AI assistant</li>
        <li>/api/subscriptions/plans - Subscription plans</li>
        <li>/api/auth/login - User authentication</li>
      </ul>
      <p><strong>Status:</strong> Backend API system operational</p>
    </div>
  );
}
