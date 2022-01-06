import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavbarContext } from '../context/navbar_context';
import { useUserContext } from '../context/user_context';

const LogsBtn = () => {
  const { isUserAuthenticated } = useUserContext();
  const { changePage } = useNavbarContext();

  return (
    <Wrapper>
      {isUserAuthenticated ? (
        <button type="button" className="auth-btn">
          Logout
        </button>
      ) : (
        <div className="login-signup">
          <div className="login">
            <Link
              to="/login"
              className="auth-btn"
              onClick={() => changePage('notLink')}
            >
              Login
            </Link>
          </div>
          <div className="signup">
            <Link to="/signup" onClick={() => changePage('notLink')}>
              Signup
            </Link>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 0;

  .login-signup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .auth-btn {
    display: flex;
    margin: 0 auto;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--clr-primary-2);
    letter-spacing: var(--spacing);
    padding: 0.5rem 1rem;

    svg {
      margin-left: 7px;
    }
  }

  .signup {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;

export default LogsBtn;
