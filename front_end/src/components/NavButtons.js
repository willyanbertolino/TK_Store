import { FaHeart, FaShoppingBag, FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavbarContext } from '../context/navbar_context';
import { useCartContext } from '../context/cart_context';

const NavButtons = () => {
  const { total_items } = useCartContext();
  const notification = 1;
  const love = 3;

  const { changePage } = useNavbarContext();

  return (
    <Wrapper>
      <Link
        to="/notifications"
        className="cart-love-btn"
        onClick={() => changePage('notifications')}
      >
        <span className="container">
          <FaBell />
          {notification !== 0 && <span className="value">{notification}</span>}
        </span>
      </Link>
      <Link
        to="/love"
        className="cart-love-btn"
        onClick={() => changePage('love')}
      >
        <span className="container">
          <FaHeart />
          {love !== 0 && <span className="value">{love}</span>}
        </span>
      </Link>
      <Link
        to="/cart"
        className="cart-love-btn"
        onClick={() => changePage('cart')}
      >
        <span className="container">
          <FaShoppingBag />
          {total_items !== 0 && <span className="value">{total_items}</span>}
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  width: 9rem;

  .cart-love-btn {
    color: var(--clr-primary-2);
    font-size: 1.3rem;
    letter-spacing: var(--spacing);
    display: flex;
    align-items: center;
  }

  .container {
    display: flex;
    align-items: center;
    position: relative;

    svg {
      height: 1.6rem;
      margin-left: 5px;
      transition: var(--transition);
    }

    svg:hover {
      transform: scale(1.1);
      color: var(--clr-primary-3);
    }
  }

  .value {
    position: absolute;
    top: -10px;
    right: -16px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    font-size: 0.8rem;
    background: var(--clr-primary-3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-primary-5);
    padding: 12px;
  }
`;
export default NavButtons;
