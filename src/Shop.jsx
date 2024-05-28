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
  const updateCart = (item, newQuantity) => {
    // return if newQuantity = 0. No update needed.
    if (newQuantity === 0 || isNaN(newQuantity)) {
      return;
    }

    // If ID already exists, add or subtract from quantity
    console.log("len", cart.length);
    if (cart.length === 0 ) {
      setCart((prevCart) => [...prevCart, { item: item.id, quantity: newQuantity }]);  
      return;
    }

    for (let i = 0; i < cart.length; i ++) {
      console.log(i, "match?", cart[i].item, item.id );
      if (cart[i].item === item.id) {
        // add items
        if (newQuantity > 0) {
          console.log("add");
          cart[i].quantity = cart[i].quantity + newQuantity;
          setCart(cart);  
          return;
        }
        // subtract items if total quantity is >0  
        if (newQuantity < 0 && cart[i].quantity >  Math.abs(newQuantity) ) {
          console.log("sub it", typeof(newQuantity));
          cart[i].quantity = cart[i].quantity + newQuantity;
          setCart(cart);  
          return;
        }
        // set quantity to 0 if total quantity is <=0
        if (newQuantity < 0 && cart[i].quantity <  Math.abs(newQuantity)) {
          cart[i].quantity = 0
          setCart(cart);
          return;
        }
      }

      //If ID doesn't exist in array, add this item id to cart  
      if (!(cart[i].item === item.id) && i === (cart.length - 1)) {
        setCart((prevCart) => [...prevCart, { item: item.id, quantity: newQuantity }]);  
        return;
      }
    }
    console.log("again", cart);
    // Clear input quantity after adding an item to cart
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
                    updateCart(item, quantity);
                    document.getElementById(`quantity-${item.id}`).value = 0;
                    console.log("return", cart);
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
