import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.scss';

// import 'normalize.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rick_and_morty_react/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);