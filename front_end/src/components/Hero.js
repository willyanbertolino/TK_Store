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

  article {
    width: 100%;
    height: 100%;
    display: grid;
  }

  .content {
    position: relative;
  }

  p {
    align-self: center;
    line-height: 1.5;
    max-width: 40rem;
    color: var(--clr-primary-2);
    font-size: 1rem;
    padding-bottom: 3rem;
  }

  a {
    position: absolute;
    bottom: 0;
    text-shadow: 3px 1px 5px var(--clr-primary-4);
  }

  @media (min-width: 990px) {
    grid-template-columns: 1fr 1fr;

    .content {
      margin-right: 3rem;
    }
  }
`;

export default Hero;
