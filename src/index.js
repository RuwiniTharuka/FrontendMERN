import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- this line changes in React 18
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root")); // <-- createRoot instead of render
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    
  </BrowserRouter>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import {BrowserRouter} from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
//  );
