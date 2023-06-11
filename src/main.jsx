import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CardContextProvider } from './context/card-details.context.jsx';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardContextProvider>
        <App />
      </CardContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
