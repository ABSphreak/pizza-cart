import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarWrapper = styled.nav``;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
