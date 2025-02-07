import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage.jsx';
import ProductDetail from './ProductDetail.jsx';
import Container from './container.jsx';
import './styles.css';
// import './ProductDetail.css';
// import './ProductDetail.module.css';
import Containerr from './containerr.jsx';
//import 'bootstrap/dist/css/bootstrap/.min.css';

import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Containerr/>
  </StrictMode>,
)
