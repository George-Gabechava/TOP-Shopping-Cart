// App.jsx
import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar from './NavBar';

// add a navigation bar to both pages, so the user can go back and forth between them
// would this be a seperate component I bring into the begining of both of them?
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <h1>Our First Test</h1>
      <p>This is the home page. Does it feel like home?</p>      
    </div>
  );
};

export default App

