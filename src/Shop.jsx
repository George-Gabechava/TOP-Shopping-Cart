//pacakges
import { useOutletContext } from "react-router-dom";

// components
import Footer from "./Footer";

function Shop () {
  const context = useOutletContext();
  const data = context.data;
  const cart = context.cart;
  const setCart = context.setCart;


  // add to cart function for Shop.jsx
  const addToCart = (item, quantity) => {
    //// Need to fix the setCart function. Add or subtract items based on id?
    // if id already exists, add or subtract from quantity
      //code

    //otherwise, add this item id to cart (also do not let quantity become negative)
      // code



    //maybe useful code, maybe junk ¯\_ (ツ)_/¯
    // setCart((prevCart) => [...prevCart, { ...item, quantity }]);

    // Clear quantity input after adding item to cart
    document.getElementById(`quantity-${item.id}`).value = 0;
  };

  return (
    <div className="content">
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
                    console.log(cart);
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
      <Footer></Footer>
    </div>
  );
};

export default Shop;
