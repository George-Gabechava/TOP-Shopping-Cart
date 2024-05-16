// App.jsx
import NavBar from './NavBar';
import Footer from './Footer';

import getShop from './Components/getShop';

const App = () => {
  return (
    <div className='content'>
      <NavBar></NavBar>
      <h1>The Random Stuff Store</h1>
      <p>{"Do you need more random stuff in your life? Well you've come to the right place!"}</p>      
      {/* maybe make the image the background with some text over it */}
      {/* <img id='homeImage' src={messyYard} alt="Messy Yard" /> */}
      <Footer></Footer>
    </div>
  );
};


export default App;