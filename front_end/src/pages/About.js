import styled from 'styled-components';
import aboutImg from '../assets/product2.jpeg';

const About = () => {
  return (
    <Wrapper className="section-center">
      <img src={aboutImg} alt="nice room" />
      <article>
        <div className="title">
          <h2>our story</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
          magnam magni quia iusto at sapiente est, laboriosam esse nulla tempore
          voluptatibus unde iure harum doloremque placeat qui blanditiis
          explicabo perspiciatis eaque eum. Iusto architecto exercitationem
          itaque odit quibusdam velit, quam totam earum accusantium eius ipsa
          deserunt laudantium suscipit soluta quod.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    border-radius: var(--radius);
    height: 450px;
    object-fit: cover;
  }

  .title {
    text-transform: capitalize;
    color: var(--clr-primary-2);
  }

  p {
    line-height: 2;
    max-width: 45rem;
    margin: 2rem auto;
    color: var(--clr-primary-5);
  }

  @media (min-width: 990px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
