// packages
import { useOutletContext } from "react-router-dom";

// components
import Footer from "./Footer";

function Shop() {
  const context = useOutletContext();
  const data = context.data;
  const cart = context.cart;
  const setCart = context.setCart;
  const cartCount = context.cartCount;
  const setCartCount = context.setCartCount;

  const countCart = (currentCart) => {
    let currentCartQuantity = 0;
    if (currentCart.length === 0) {
      setCartCount(0);
      return;
    }
    for (let i = 0; i < currentCart.length; i++) {
      const thisQuantity = currentCart[i].quantity;
      currentCartQuantity = currentCartQuantity + thisQuantity;
    }
    setCartCount(currentCartQuantity);
  };

  // Add-to-cart function for Shop.jsx
  const updateCart = (item, newQuantity) => {
    // return if newQuantity = 0. No update needed.
    if (newQuantity === 0 || isNaN(newQuantity)) {
      return;
    }

    // Create cart if there isn't one.
    if (cart.length === 0) {
      setCart((prevCart) => {
        const newCart = [...prevCart, { item: item.id, quantity: newQuantity }]; 
        countCart(newCart); 
        return newCart; 
      });
      return;
    }

    // If ID already exists, add or subtract from quantity
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item === item.id) {
        // add items
        if (newQuantity > 0) {
          const newCart = cart.map((cartItem, index) => {
            if (index === i) {
              return { ...cartItem, quantity: cartItem.quantity + newQuantity }; 
            }
            return cartItem;
          });
          setCart(newCart); 
          countCart(newCart); 
          return;
        }
        // subtract items if total quantity is >0
        if (newQuantity < 0 && cart[i].quantity > Math.abs(newQuantity)) {
          const newCart = cart.map((cartItem, index) => {
            if (index === i) {
              return { ...cartItem, quantity: cartItem.quantity + newQuantity }; 
            }
            return cartItem;
          });
          setCart(newCart); 
          countCart(newCart); 
          return;
        }
        // set quantity to 0 if total quantity is <=0, then remove this item from array
        if (newQuantity < 0 && cart[i].quantity <= Math.abs(newQuantity)) {
          const newCart = [...cart.slice(0, i), ...cart.slice(i + 1)];
          setCart(newCart);
          countCart(newCart);
          return;
        }        
      }

      // If ID doesn't exist in array, add this item id to cart
      if (!(cart[i].item === item.id) && i === (cart.length - 1) && newQuantity > 0) {
        setCart((prevCart) => {
          const newCart = [...prevCart, { item: item.id, quantity: newQuantity }]; 
          countCart(newCart); 
          return newCart; 
        });
        return;
      }
    }
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
                    if (quantity === 0 || isNaN(quantity)) {
                      document.getElementById(`quantity-${item.id}`).value = -1;
                    }
                  }}
                >
                  -
                </button>

                {/* Put current item quantity into cart */}
                <button
                  onClick={() => {
                    const quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    updateCart(item, quantity);
                    document.getElementById(`quantity-${item.id}`).value = 0;
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
}

export default Shop;
