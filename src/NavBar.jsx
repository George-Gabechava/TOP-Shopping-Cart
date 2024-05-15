// Navbar.jsx
import { Link } from 'react-router-dom';
import home from "./assets/home.svg";

const NavBar = () => {
  return (
      <nav>
        <Link id='navLeft' to="/">
          <img id="homeSVG" src={home}></img>
          <p>Home</p>
        </Link>
        <div id='navRight'>
          <Link to="shop">
            <p>Shop Page</p>
          </Link>
          <Link to="cart">
            <p>Cart</p>
          </Link>
          </div>
      </nav>
  );
};

export default NavBar