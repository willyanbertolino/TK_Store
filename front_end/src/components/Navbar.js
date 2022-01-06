import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavButtons from './NavButtons';
import { FaBars, FaUser, FaUserPlus } from 'react-icons/fa';
import { links } from '../utils/constants';
import LogsBtn from './LogsBtn';
import { useNavbarContext } from '../context/navbar_context';
import { useWindowSize } from '../custom_hook/window_size';
import { useUserContext } from '../context/user_context';

const Navbar = () => {
  const { isUserAuthenticated, user } = useUserContext();
  const {
    page,
    sidebar,
    openSidebar,
    closeSidebar,
    changePage,
  } = useNavbarContext();

  const width = useWindowSize();

  const userControl = (screenSizeClassName) => {
    return (
      <div className={screenSizeClassName}>
        {isUserAuthenticated ? (
          <Link to="/user" onClick={() => changePage('user')}>
            <FaUser />
          </Link>
        ) : (
          <Link to="/login" onClick={() => changePage('login')}>
            <FaUserPlus />
          </Link>
        )}
      </div>
    );
  };

  useEffect(() => {
    if (width >= 900) {
      closeSidebar();
    }
  }, [width]);

  // show the links to navigate
  function linksDisplay() {
    return links.map((item) => {
      const { id, text, url } = item;

      if (page !== text)
        return (
          <Link to={url} key={id}>
            <li onClick={() => changePage(text)}>{text}</li>
          </Link>
        );
    });
  }

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">TK Store</Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        {/* wide screen */}
        <ul className="nav-links">
          {linksDisplay()}
          {isUserAuthenticated ? (
            <Link to="/checkout" key="checkout">
              <li onClick={() => changePage('checkout')}>checkout</li>
            </Link>
          ) : null}
        </ul>
        <div className="nav-btn-show">
          <NavButtons />
          {userControl('user user-small')}
          <LogsBtn />
        </div>

        {/* small screen */}
        <aside
          className={`aside-container ${sidebar ? 'show-aside-container' : ''}`}
        >
          <button
            type="button"
            className="close-side-links"
            onClick={closeSidebar}
          ></button>

          <div className="user-container">
            <div onClick={closeSidebar}>
              {userControl('user')}
              <LogsBtn />
            </div>
            <h2>{user.name}</h2>
            <NavButtons />
          </div>

          <ul className="side-links">
            {linksDisplay()}
            {isUserAuthenticated ? (
              <Link to="/checkout" key="checkout">
                <li onClick={() => changePage('checkout')}>checkout</li>
              </Link>
            ) : null}
          </ul>
        </aside>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 85vw;
    margin: 0 auto;
    max-width: 1100px;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-family: var(--ff-secondary);
      font-size: 1.6rem;
      color: var(--clr-primary-2);
      letter-spacing: var(--spacing);
      background: var(--clr-primary-5);
      padding: 1rem 0.7rem 0 0.3rem;
      border-radius: 50% 50% 0 5% / 50% 100% 0 15%;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-3);
    cursor: pointer;

    svg {
      font-size: 2rem;
    }
  }

  .aside-container {
    display: none;
    position: fixed;
    left: 100%;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }

  .user-container {
    position: absolute;
    left: 65%;
    top: 2rem;
    width: 180px;
    transform: translateX(-50%);
    z-index: 10;
  }

  .user {
    width: 80px;
    height: 80px;
    border: 2px solid var(--clr-primary-4);
    color: var(--clr-primary-4);
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin: 0 auto;
    margin-bottom: 1rem;
    transition: var(--transition);
  }

  .user svg {
    font-size: 2.3rem;
    transition: var(--transition);
  }

  .user:hover svg {
    color: var(--clr-primary-3);
  }
  .user:hover {
    cursor: pointer;
    border-color: var(--clr-primary-3);
  }

  .user-small {
    width: 40px;
    height: 40px;
    /* margin-left: 2rem; */
    margin-top: 0.8rem;
  }

  .user-small svg {
    font-size: 1.2rem;
  }

  .user-container h2 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: var(--clr-primary-2);
    text-align: center;
  }

  .side-links {
    position: absolute;
    left: 30%;
    width: 70%;
    height: 100vh;
    background: var(--clr-bcg);
    padding-top: 15rem;
    padding-left: 3rem;
    border-left: 1px solid var(--clr-primary-1);
    transition: var(--transition);
  }

  .show-aside-container {
    display: block;
    left: 0;
  }

  .side-links li {
    font-size: 1.3rem;
    padding: 1rem 1.3rem;
    width: 100%;
    margin-bottom: 1rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    transition: var(--transition);
    background: var(--clr-secondary-1);
  }

  .side-links li:hover {
    border-bottom: 1px solid var(--clr-primary-1);
    background: var(--clr-secondary-3);
    cursor: pointer;
  }

  .side-links li:hover a {
    color: var(--clr-secondary-2);
  }

  .close-side-links {
    position: absolute;
    left: 0%;
    width: 30%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    border: transparent;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    cursor: pointer;
  }

  .nav-btn-show,
  .nav-links {
    display: none;
  }

  @media screen and (min-width: 900px) {
    .nav-toggle {
      display: none;
    }

    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }

    .nav-links {
      display: flex;
      justify-content: center;

      li {
        margin: 0 0.5rem;
      }

      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;

        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .nav-btn-show {
      display: grid;
      place-items: center;
      grid-template-columns: 180px 70px auto;
    }
  }
`;

export default Navbar;
