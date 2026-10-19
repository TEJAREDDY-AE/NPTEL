import React, { Component, ErrorInfo, ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in React tree:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#0a0b0e', color: '#ffffff', fontFamily: 'sans-serif', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#ebb6a8' }}>Display Diagnostic</h1>
          <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '500px', marginBottom: '20px' }}>
            A render issue was intercepted. Details below:
          </p>
          <pre style={{ background: '#1e202e', padding: '16px', borderRadius: '12px', fontSize: '12px', color: '#f87171', maxWidth: '600px', overflowX: 'auto', textAlign: 'left', marginBottom: '24px' }}>
            {this.state.error?.toString()}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{ padding: '10px 24px', borderRadius: '12px', background: '#7141e7', color: '#ffffff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
