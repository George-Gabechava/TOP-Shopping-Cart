// Navbar.jsx
import { Link } from 'react-router-dom';
import home from "./assets/home.svg";
import cart from "./assets/cart-variant.svg"
import { useState } from 'react';
import { number } from 'prop-types';

const NavBar = (cartNumber) => {
  const [cartAmount, setCartAmount] = useState(0)

  if (cartNumber === number) {
    setCartAmount = cartAmount + cartNumber;
  }

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
            <p>Cart</p>
            <img id="cartSVG" src={cart} alt='cart icon'></img>
            {/* use state here to update # items in cart when it changes */}
            <p>{cartAmount}</p>
          </Link>
          </div>
      </nav>
  );
};

export default NavBar