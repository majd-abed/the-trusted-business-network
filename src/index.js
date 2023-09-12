import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from "./Context/context";

import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import './css/main.css';
import './css/signup.css';
import './css/temp.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);