// NavBar.jsx
import { Link } from "react-router-dom";
import home from "./assets/home.svg";
import cartImage from "./assets/cart-variant.svg";

function NavBar({ cartCount, data, cart, addToCart }) {
  return (
    <nav>
      <div id="navLeft">
        <Link className="navLeftItem" to="/">
          <img id="homeSVG" src={home} alt="home icon" />
          <p>The Random Stuff Store</p>
        </Link>
      </div>
      {data && ( // Only render the right nav section if data exists
        <div id="navRight">
          <Link
            className="navRightItem"
            to={{
              pathname: "/shop",
              state: { data, cart, addToCart },
            }}
          >
            <p id="shopLink">Shop</p>
          </Link>
          <Link className="navRightItem" to="/cart">
            <p>Cart</p>
            <img id="cartSVG" src={cartImage} alt="cart icon" />
            <p>{cartCount}</p>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;