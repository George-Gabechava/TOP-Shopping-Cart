// Navbar.jsx
import { Link } from 'react-router-dom';
import home from "./assets/home.svg";
import cart from "./assets/cart-variant.svg"

const NavBar = () => {
  return (
      <nav>
        {/* Left Side of Navigation Bar */}
        <div id='navLeft'>
          <Link className='navLeftItem' to="/">
            <img id="homeSVG" src={home} alt='home icon'></img>
            <p>The Random Stuff Store</p>
          </Link>
        </div>

        {/* Right Side of Navigation Bar */}
        <div id='navRight'>
          <Link className='navRightItem' to="shop">
            <p id='shopLink'>Shop</p>
          </Link>
          <Link className='navRightItem' to="cart">
            <img id="cartSVG" src={cart} alt='cart icon'></img>
            {/* use state here to update # items in cart when it changes */}
            <p>Cart</p>
          </Link>
          </div>
      </nav>
  );
};

export default NavBar