// App.jsx
import { useState } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Our First Test</h1>
      <p>Here is an example of a link to other page(s)</p>
      <nav>
        <Link to="shop">Shop page</Link>
      </nav>
    </div>
  );
};

export default App







