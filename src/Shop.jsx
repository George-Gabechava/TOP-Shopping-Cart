import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import getShop from "./Components/getShop";

const Shop = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await getShop();
        setData(postsData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item, quantity) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // If the item is already in the cart, update its quantity
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      });
    } else {
      // If the item is not in the cart, add it with the specified quantity
      setCart((prevCart) => [...prevCart, { ...item, quantity }]);
    }
    // Clear quantity input after adding item to cart
    document.getElementById(`quantity-${item.id}`).value = 0;
  };
  
    // Load cart state from localStorage when component mounts
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);
  
    // Save cart state to localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

  return (
    <div className="content">
      <NavBar cart={cart} />
      <div id="shopHeader">
        <h1>Shop!</h1>
        <p>Wow! So much random stuff!</p>
      </div>
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
              <div className="interactionBar">
              <button
                  onClick={() => {
                    let quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    document.getElementById(`quantity-${item.id}`).value = quantity - 1;
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    const quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    handleAddToCart(item, quantity);
                  }}
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => {
                    let quantity = parseInt(
                      document.getElementById(`quantity-${item.id}`).value
                    );
                    if (isFinite(quantity)) {
                      document.getElementById(`quantity-${item.id}`).value = quantity + 1;
                    }
                    if (quantity === 0 || isNaN(quantity)) {
                      document.getElementById(`quantity-${item.id}`).value = 1
                    }
                  }}
                >
                  +
                </button>
              </div>
            </li>
          ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Shop;
