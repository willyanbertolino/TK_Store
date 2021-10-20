import styled from 'styled-components';

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> TK Store</span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-1);
  text-align: center;

  span {
    color: var(--clr-primary-5);
    font-size: 0.9rem;
  }

  h5 {
    color: var(--clr-white);
    font-weight: 400;
    line-height: 1.3rem;
    letter-spacing: var(--spacing);
  }

  @media (min-width: 800px) {
    flex-direction: row;

    span {
      margin-right: 0.5rem;
    }
  }
`;

export default Footer;
