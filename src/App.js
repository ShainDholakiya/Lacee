import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import About from "./components/About";

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper />
        <About />
      </div>
    </Router>
  );
}

export default App;