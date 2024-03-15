import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import Projects2 from './Projects2';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
         <App />
         <About />
         <Projects2/>
         <Contact/>
  
  </React.StrictMode>
);

