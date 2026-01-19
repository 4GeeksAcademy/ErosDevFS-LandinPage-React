import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
