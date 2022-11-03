import React from 'react';
import ReactDOM from 'react-dom/client';
/* eslint-disable */
// import bootstrap css minified version
import 'bootstrap/dist/css/bootstrap.min.css';

// import bootstrap js minified version
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import jquery to use bs js components
import $ from 'jquery';

// import jquery to use bs js components
import Popper from 'popper.js';

// import App component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
