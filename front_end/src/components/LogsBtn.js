import { FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useNavbarContext } from '../context/navbar_context';

const LogsBtn = () => {
  const login = false;

  const { changePage } = useNavbarContext();

  return (
    <Wrapper>
      {login ? (
        <button type="button" className="auth-btn">
          Logout <FaUserMinus />
        </button>
      ) : (
        <div className="login-signup">
          <div className="login">
            <Link
              to="/login"
              className="auth-btn"
              onClick={() => changePage('notLink')}
            >
              Login <FaUserPlus />
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
  margin-top: 3rem;

  .login-signup {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .auth-btn {
    display: flex;
    align-items: center;
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
