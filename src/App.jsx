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

  const addToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    // Clear quantity input after adding item to cart
    document.getElementById(`quantity-${item.id}`).value = 0;
  };

  const specificItems = data ? [data[1], data[4], data[11], data[15]] : [];

  return (
    <div className='content'>
      {/* <NavBar cartCount = {cart.length}></NavBar> */}
      <NavBar cartCount={cart.length} data={data} cart={cart} addToCart={addToCart} />
      <h1>The Random Stuff Store</h1>
      <p>{"Do you need more random stuff in your life? Well you've come to the right place!"}</p>      
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
      <Footer></Footer>
    </div>
  );
};


export default App;
