import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../context/navbar_context';

const Error = () => {
  const { changePage } = useNavbarContext();

  return (
    <Wrapper className="page-height">
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried cannot be fount</h3>
        <Link to="/" onClick={() => changePage('home')} className="btn-link">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  text-align: center;

  h1 {
    font-size: 7rem;
  }

  h3 {
    margin-bottom: 2rem;
  }
`;

export default Error;
