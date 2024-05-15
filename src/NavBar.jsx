// Navbar.jsx
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <button>Home Page</button>
        </Link>
        <Link to="shop">
          <button>Shop Page</button>
        </Link>
      </nav>
    </div>
  );
};

// document.getElementById('foo').className = classes.btn

export default NavBar

