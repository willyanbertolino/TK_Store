import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavbarContext } from '../context/navbar_context';
import { useUserContext } from '../context/user_context';
import Loading from '../components/Loading';
import Alert from '../components/Alert';

const Signup = () => {
  const { changePage } = useNavbarContext();
  const {
    user_loading: loading,
    user_error_message: error,
    isUserAuthenticated,
    registerUser,
  } = useUserContext();

  console.log(useUserContext());

  const [submitControl, setSubmitControl] = useState(true);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const [eyePassword, setEyePassword] = useState(true);
  const [eyePasswordRepeat, setEyePasswordRepeat] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  useEffect(() => {
    const { name, email, password, passwordRepeat } = newUser;

    if (name && email && password && passwordRepeat) {
      setSubmitControl(false);
    }
  }, [newUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, passwordRepeat } = newUser;

    if (password !== passwordRepeat) {
      setNewUser((prev) => {
        return { ...prev, password: '', passwordRepeat: '' };
      });
      setSubmitControl(true);
      return alert('Password does not match!');
    }

    registerUser({ name, email, password });
  };

  if (loading) {
    return <Loading />;
  }

  if (isUserAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper className="section-user">
      <div className="container-user">
        <h1>TK Store</h1>

        {error ? <Alert msg={error} /> : null}

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
              autoComplete="on"
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
              autoComplete="on"
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
              <Link
                to="/"
                className="btn cancel-btn"
                onClick={() => changePage('home')}
              >
                Cancel
              </Link>
              <button
                type="submit"
                className={`btn signup-btn ${
                  submitControl ? 'btn-disabled' : 'btn-active'
                }`}
                disabled={submitControl}
                onClick={handleSubmit}
              >
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
    align-items: center;
    justify-content: center;
  }

  .cancel-btn {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    line-height: 2rem;
    width: 50%;
    opacity: 0.6;
    text-align: center;
    font-weight: 400;
    color: var(--clr-white);
    background: var(--clr-primary-1);
  }

  .signup-btn {
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
    line-height: 2rem;
    width: 50%;
    opacity: 0.7;
  }

  .btn-active:hover {
    opacity: 1;
    font-size: 0.9rem;
  }

  .btn-disabled {
    background: var(--clr-grey-10);
    color: var(--clr-grey-4);
    cursor: default;
  }

  .terms {
    text-align: center;
  }
`;

export default Signup;
