import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import getShop from "./Components/getShop";

//Shop.jsx
function Shop ({ data, cart, addToCart }) {

  return (
    <div className="content">
      {/* Load Navigation Bar */}
      <NavBar cart={cart} />
      <div id="shopHeader">
        <h1>Shop!</h1>
        <p>Wow! So much random stuff!</p>
      </div>
      {/* Load the shop items if the data has been fetched */}
      <ul id="shopList" className="noBullets">
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <img className="shopImage" src={item.image} alt={item.title} />
              <p>${item.price}</p>
              <input
                className="quantityBar"
                type="number"
                placeholder="0"
                id={`quantity-${item.id}`}
              />
              {/* Subtract 1 from current item quantity */}
              <div className="interactionBar">
                <button
                  onClick={() => {
                    let quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    document.getElementById(
                      `quantity-${item.id}`
                    ).value = quantity - 1;
                  }}
                >
                  -
                </button>
              
                {/* Put current item quantity into cart*/}
                <button
                  onClick={() => {
                    const quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    addToCart(item, quantity);
                  }}
                >
                  Add to Cart
                </button>

                {/* Add 1 to current item quantity */}
                <button
                  onClick={() => {
                    let quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    if (isFinite(quantity)) {
                      document.getElementById(
                        `quantity-${item.id}`
                      ).value = quantity + 1;
                    }
                    if (quantity === 0 || isNaN(quantity)) {
                      document.getElementById(`quantity-${item.id}`).value = 1;
                    }
                  }}
                >
                  +
                </button>
              </div>
            </li>
          ))}
      </ul>
      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default Shop;
