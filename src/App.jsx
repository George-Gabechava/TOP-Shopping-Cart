import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import getShop from './Components/getShop';

import { Link } from 'react-router-dom';

//App.jsx
function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  // get product data from getShop file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getShop();
        setData(postsData);
        setError(null); 
      }
      catch(err) {
        setError(err.message);
        setData(null);
      }
    }
  
  fetchData();
  }, []);

  // add to cart function for Shop.jsx
  const addToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    // Clear quantity input after adding item to cart
    document.getElementById(`quantity-${item.id}`).value = 0;
  };

  // display some shop items on the home page
  const specificItems = data ? [data[1], data[4], data[11], data[15]] : [];

  return (
    <div className='content'>
      {/* Load NavBar. Send props through NavBar, which will be sent to Shop page */}
      <NavBar cartCount={cart.length} data={data} cart={cart} addToCart={addToCart} />
      <h1>The Random Stuff Store</h1>
      <p>{"Do you need more random stuff in your life? Well you've come to the right place!"}</p> 

      {/* // display some shop items on the home page */}
      <ul id='homeList' className="noBullets">
        {specificItems.map((item, index) => (
          item && (
            <li key={item.id}>
              <img className='homeImage' src={item.image}></img>
              <p>{item.title}</p>
            </li>
          )
        ))}
      </ul>
      {/* Load Footer */}
      <Footer></Footer>
    </div>
  );
};

export default App;
