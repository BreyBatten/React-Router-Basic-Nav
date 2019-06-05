import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Route exact path="/" component={Home}>Home</Route>
        </div>
        <div>
          <Route path="/about" component={About}>About</Route>
        </div>
        <div>
          <Route path="/contact" component={Contact}>Contact</Route>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
