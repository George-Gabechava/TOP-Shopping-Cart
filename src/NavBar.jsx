//Packages
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
// import PropTypes from 'prop-types';

//Components
import getShop from "./Components/getShop";

//Images
import home from "./assets/home.svg";
import cartImage from "./assets/cart-variant.svg";

function NavBar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

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

  if (!data) {
    return <>loading...</>;
  }

  return (
    <>
      <nav>
        {/* Left side of Navigation Bar */}
        <div id="navLeft">
          <Link className="navLeftItem" to="/">
            <img id="homeSVG" src={home} alt="home icon" />
            <p>The Random Stuff Store</p>
          </Link>
        </div>

        {/* Right side of Navigation Bar */}
        <div id="navRight">
          <Link className="navRightItem" to="/shop">
            <p id="shopLink">Shop</p>
          </Link>

          {/* Cart Icon updates with number of items in cart */}
          <Link className="navRightItem" to="/cart">
            <p>Cart</p>
            <img id="cartSVG" src={cartImage} alt="cart icon" />
            <p>{cartCount}</p>
          </Link>
        </div>   
      </nav>

    <Outlet context={{data, cart, setCart, cartCount, setCartCount}}></Outlet>
  </>
  );
}

export default NavBar;