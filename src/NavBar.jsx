//Packages
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

//Components
import getShop from "./Components/getShop";

//Images
import home from "./assets/home.svg";
import cartImage from "./assets/cart-variant.svg";

function NavBar() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

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
        <div id="navLeft">
          <Link className="navLeftItem" to="/">
            <img id="homeSVG" src={home} alt="home icon" />
            <p>The Random Stuff Store</p>
          </Link>
        </div>

        <div id="navRight">
          <Link className="navRightItem" to="/shop">
            <p id="shopLink">Shop</p>
          </Link>

          {/* Cart Icon to update with number of items in cart */}
          <Link className="navRightItem" to="/cart">
            <p>Cart</p>
            <img id="cartSVG" src={cartImage} alt="cart icon" />
            <p>{cart.length}</p>
          </Link>
        </div>   
      </nav>

    <Outlet context={{data, cart, setCart}}></Outlet>
  </>
  );
}

export default NavBar;