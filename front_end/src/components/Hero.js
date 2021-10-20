import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroBcg from '../assets/hero.jpeg';
import { useNavbarContext } from '../context/navbar_context';

const Hero = () => {
  const { changePage } = useNavbarContext();
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1>
          Live better <br />
          Sleep more
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          debitis fugit, vel modi ad, cupiditate nam temporibus ut sunt earum
          quia, facilis ullam eaque minima?
        </p>
        <Link
          to="/products"
          onClick={() => changePage('products')}
          className="btn-link"
        >
          shop now
        </Link>
      </article>
      <article className="image-container">
        <img src={heroBcg} alt="hero-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  color: var(--clr-primary-1);

  p {
    line-height: 2;
    max-width: 45rem;
    color: var(--clr-primary-2);
    font-size: 1rem;
  }
`;

export default Hero;
