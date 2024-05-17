// Shop.jsx
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

import getShop from "./Components/getShop";

const Shop = () => {
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

  return (
    <div className="content">
      <NavBar />
      <div id="shopHeader">
        <h1>Hello from Shop page!</h1>
        <p>So, how are you?</p>
      </div>
      {/* make the cards and cart function for each item which will useState */}
      <ul id="shopList" className="noBullets">
      {data && data.map((item) => (
        <li key={item.id}>
        <p>{item.title}</p>
        <img className="shopImage" src={item.image}></img>
        {/* <p>{item.description}</p> */}
        <p>${item.price}</p>
        <div className="interactionBar">
        <input placeholder="Quantity"></input>
          <button onClick={() => NavBar(1)}>Add to Cart</button>                      
        </div>
        </li>
      ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Shop;
