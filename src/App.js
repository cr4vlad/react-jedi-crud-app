import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import BaseRouter from './routes'
import Navbar from './components/Navbar'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <BaseRouter />
        </Router>
    );
}

export default App;
