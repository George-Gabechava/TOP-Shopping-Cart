// Shop.jsx
import React, { useState, useEffect } from "react";
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
      <div id="shopGrid">
        <div id="leftShop">
          <h1>Hello from Shop page!</h1>
          <p>So, how are you?</p>
        </div>
        <div id="rightShop"></div>
      </div>
      {data && data.map((item) => (
        <li key={item.id}>
        <p>{item.title}</p>
        </li>
      ))}
      <Footer />
    </div>
  );
};

export default Shop;
