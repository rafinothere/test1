import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 🔹 Restore requested path after GitHub Pages 404 redirect
const pending = sessionStorage.getItem('gh:redirect');
if (pending) {
  sessionStorage.removeItem('gh:redirect');
  window.history.replaceState(null, '', pending);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);