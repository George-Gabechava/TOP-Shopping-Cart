// NavBar.jsx
import { Link } from "react-router-dom";
import home from "./assets/home.svg";
import cartImage from "./assets/cart-variant.svg";

const NavBar = ({ cart = [] }) => { 
  const cartQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
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
        <Link className="navRightItem">
          <p>Cart</p>
          <img id="cartSVG" src={cartImage} alt="cart icon" />
          <p>{cartQuantity}</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
