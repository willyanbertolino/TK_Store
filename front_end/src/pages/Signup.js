import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { TKStoreContext } from '../utils/context';

const Signup = () => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });
  const [eyePassword, setEyePassword] = useState(true);
  const [eyePasswordRepeat, setEyePasswordRepeat] = useState(true);
  const { isLogin } = useContext(TKStoreContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="section-user">
      <div className="container-user">
        <h1>TK Store</h1>
        <form>
          <div className="input-container-user">
            <p className="signup-text">
              Please fill in this form to create an account.
            </p>

            <input
              type="text"
              id="name"
              name="name"
              value={newUser.name}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="name"
              style={{
                color: newUser.name ? 'var(--clr-grey-6)' : null,
                transform: newUser.name ? 'translateY(-3.7rem)' : null,
              }}
            >
              name
            </label>

            <input
              type="text"
              id="email"
              name="email"
              value={newUser.email}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="email"
              style={{
                color: newUser.email ? 'var(--clr-grey-6)' : null,
                transform: newUser.email ? 'translateY(-3.7rem)' : null,
              }}
            >
              Email
            </label>

            <input
              type={eyePassword ? 'password' : 'text'}
              id="password"
              name="password"
              value={newUser.password}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="password"
              style={{
                color: newUser.password ? 'var(--clr-grey-6)' : null,
                transform: newUser.password ? 'translateY(-3.7rem)' : null,
              }}
            >
              Password
            </label>
            <button
              type="button"
              className="eye eye-password"
              onClick={() => setEyePassword(!eyePassword)}
            >
              {eyePassword ? <FaEye /> : <FaEyeSlash />}
            </button>

            <input
              type={eyePasswordRepeat ? 'password' : 'text'}
              id="passwordRepeat"
              name="passwordRepeat"
              value={newUser.passwordRepeat}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="passwordRepeat"
              style={{
                color: newUser.passwordRepeat ? 'var(--clr-grey-6)' : null,
                transform: newUser.passwordRepeat
                  ? 'translateY(-3.7rem)'
                  : null,
              }}
            >
              Repeat Password
            </label>
            <button
              type="button"
              className="eye eye-repeat"
              onClick={() => setEyePasswordRepeat(!eyePasswordRepeat)}
            >
              {eyePasswordRepeat ? <FaEye /> : <FaEyeSlash />}
            </button>

            <p className="terms">
              By creating an account you agree to our{' '}
              <Link to="/terms_privacy">Terms & Privacy</Link>.
            </p>

            <div className="btn-submit">
              <button type="button" className="btn cancel-btn">
                Cancel
              </button>
              <button type="submit" className="btn signup-btn">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .signup-text {
    color: var(--clr-grey-6);
    padding-left: 0.5rem;
    font-size: 0.8rem;
  }

  .input-container-user input:focus + label {
    color: var(--clr-grey-6);
    transform: translateY(-3.7rem);
  }

  .eye-password {
    top: 16.1rem;
  }
  .eye-repeat {
    top: 21.7rem;
  }

  .btn-submit {
    display: flex;
    justify-content: center;
  }

  .cancel-btn {
    border-top-left-radius: 0.7rem;
    border-bottom-left-radius: 0.7rem;
    line-height: 2rem;
    width: 50%;
    opacity: 0.6;
    background-image: linear-gradient(
      to right,
      var(--clr-secondary-4),
      var(--clr-primary-5)
    );
  }

  .signup-btn {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    line-height: 2rem;
    width: 50%;
    opacity: 0.7;
    background-image: linear-gradient(
      to left,
      var(--clr-secondary-4),
      var(--clr-primary-5)
    );
  }

  .btn:hover {
    opacity: 1;
    font-size: 0.9rem;
  }

  .terms {
    text-align: center;
  }
`;

export default Signup;
