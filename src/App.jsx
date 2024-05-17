// App.jsx
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import getShop from './Components/getShop';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

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

  const specificItems = data ? [data[1], data[4], data[11], data[15]] : [];

  return (
    <div className='content'>
      <NavBar></NavBar>
      <h1>The Random Stuff Store</h1>
      <p>{"Do you need more random stuff in your life? Well you've come to the right place!"}</p>      
      {/* maybe make the image the background with some text over it */}
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