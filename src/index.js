import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
         <App />
         <Contact/>
  
  </React.StrictMode>
);

