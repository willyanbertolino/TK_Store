import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eye, setEye] = useState(true);
  const isLogin = false;
  const error = '';

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <Wrapper className="section-user">
      <div className="container-user">
        <h1>TK Store</h1>
        <form>
          <div className="input-container-user">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              style={{
                color: email ? 'var(--clr-grey-6)' : null,
                transform: email ? 'translateY(-4.1rem)' : null,
              }}
            >
              email
            </label>
            <input
              type={eye ? 'password' : 'text'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              htmlFor="password"
              style={{
                color: password ? 'var(--clr-grey-6)' : null,
                transform: password ? 'translateY(-4.1rem)' : null,
              }}
            >
              password
            </label>
            <button
              type="button"
              className="eye eye-password"
              onClick={() => setEye(!eye)}
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </button>
            <button
              className="btn btn-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
            <h4>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </h4>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input:focus + label {
    color: var(--clr-grey-6);
    transform: translateY(-4.1rem);
  }

  .eye-password {
    top: 8.1rem;
  }

  .btn-submit {
    line-height: 2rem;
    width: 100%;
    border-radius: 1.5rem;
    background-image: linear-gradient(
      to left,
      var(--clr-secondary-4),
      var(--clr-primary-5),
      var(--clr-secondary-4)
    );
    opacity: 0.8;
  }

  .btn-submit:hover {
    opacity: 1;
    font-size: 0.9rem;
  }
  h4 {
    text-align: center;
    padding-top: 2rem;
  }
`;

export default Login;
