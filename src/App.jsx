// App.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import messyYard from './assets/messy-yard.jpg';

import NavBar from './NavBar';
import Footer from './Footer';

const App = () => {
  return (
    <div className='content'>
      <NavBar></NavBar>
      <h1>Our First Test</h1>
      <p>This is the home page </p>      
      {/* maybe make the image the background with some text over it */}
      {/* <img id='homeImage' src={messyYard} alt="Messy Yard" /> */}
      <Footer></Footer>
    </div>
  );
};

export default App
