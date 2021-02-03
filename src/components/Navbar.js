import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const NavbarWrapper = styled.nav`
  background: linear-gradient(to right, #141e30, #243b55);
  ul {
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
    li {
      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.5rem;
        color: white;
        .cart-link {
          display: flex;
        }
      }
    }
  }
`;

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
          <Link to="/cart">
            <div className="cart-link">
              <div className="cart-icon">
                <AiOutlineShoppingCart />
              </div>
              <div>Cart</div>
            </div>
          </Link>
        </li>
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
