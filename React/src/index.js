import React from "react";
// import  ReactDom  from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './app';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

// ReactDom.render(<App />,  document.getElementById('root')); //App component is passing

