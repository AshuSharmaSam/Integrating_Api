import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

import DragAndDrop from './dragimage';


ReactDOM.render(
<BrowserRouter>
<App/>
</BrowserRouter>
  

,
  
  document.getElementById('root')
);

