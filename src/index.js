/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Elena Khoroshun Student ID: 101908168 Date: 1/03/2018
*
********************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../src/App.js';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
