import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import product1 from '../assets/product1.jpeg';
import product2 from '../assets/product2.jpeg';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../custom_hook/window_size';
import { checkNumber, formatPrice } from '../utils/functions';
import { Link } from 'react-router-dom';
import { useNavbarContext } from '../context/navbar_context';

const featuredProducts = [
  { id: 1, mainImg: product1, name: 'Product1', price: 23.5 },
  { id: 2, mainImg: product2, name: 'Product2', price: 50.46 },
  { id: 3, mainImg: product1, name: 'Product3', price: 34.7 },
  { id: 4, mainImg: product2, name: 'Product4', price: 145.7 },
  { id: 5, mainImg: product1, name: 'Product5', price: 187.5 },
  { id: 6, mainImg: product2, name: 'Product6', price: 245.7 },
  { id: 7, mainImg: product1, name: 'Product7', price: 590.9 },
  { id: 8, mainImg: product2, name: 'Product8', price: 1099.99 },
];

const FeaturedProducts = () => {
  const { changePage } = useNavbarContext();
  const width = useWindowSize();

  function initialNum(width) {
    if (width <= 720) {
      return 1;
    }
    if (width > 720 && width <= 990) {
      return 2;
    }
    if (width > 990) {
      return 3;
    }
  }

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const [index3, setIndex3] = useState(2);
  const [num, setNum] = useState(initialNum(width));
  const [array, setArray] = useState([]);

  // reset indexes
  useEffect(() => {
    setIndex1(0);
    setIndex2(1);
    setIndex3(2);
  }, [num]);

  // display products controled by screen size and indexes
  useEffect(() => {
    if (width <= 720) {
      setNum(1);
      setArray([featuredProducts[index1]]);
      return;
    }
    if (width > 720 && width <= 990) {
      setNum(2);
      setArray([featuredProducts[index1], featuredProducts[index2]]);
      return;
    }
    if (width > 990) {
      setNum(3);
      setArray([
        featuredProducts[index1],
        featuredProducts[index2],
        featuredProducts[index3],
      ]);
      return;
    }
  }, [width, index1, index2, index3]);

  // slide control
  useEffect(() => {
    let slider = setInterval(() => {
      nextProduct();
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [num, index1]);

  // preview products
  const prevProduct = () => {
    setIndex1((index) => {
      let newIndex = index - num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
    setIndex2((index) => {
      let newIndex = index - num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
    setIndex3((index) => {
      let newIndex = index - num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
  };

  // next products
  const nextProduct = () => {
    setIndex1((index) => {
      let newIndex = index + num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
    setIndex2((index) => {
      let newIndex = index + num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
    setIndex3((index) => {
      let newIndex = index + num;
      return checkNumber(num, newIndex, featuredProducts.length);
    });
  };

  return (
    <Wrapper className="section-center">
      <h2 className="title">featured products</h2>
      <div className="container">
        <article className="content">
          {array.map((product) => {
            const { id, mainImg: img, name, price } = product;

            return (
              <div key={id} className="card-container">
                <img src={img} alt={name} />
                <div className="info">
                  <h4>{name}</h4>
                  <p>{formatPrice(price)}</p>
                </div>
              </div>
            );
          })}
        </article>
        <div className="button-container">
          <button className="prev-btn" onClick={prevProduct}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextProduct}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <Link
        to="/products"
        onClick={() => changePage('products')}
        className="btn-link all-products"
      >
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    position: relative;
  }

  .card-container img {
    transition: var(--transition);
  }

  .content {
    display: grid;
    grid-template-columns: 1fr;
  }

  .title {
    text-transform: capitalize;
    color: var(--clr-primary-2);
    padding: 2rem 0;
  }

  .info {
    height: 3rem;
    display: grid;
    grid-template-columns: 4fr 1fr;
    align-items: center;
    & p {
      text-align: right;
    }
  }

  .button-container {
    position: absolute;
    width: 85vw;
    top: 200px;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  .prev-btn,
  .next-btn {
    width: 25px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    opacity: 0.5;
    cursor: pointer;
    z-index: 1;
    border: transparent;
    transition: var(--transition);
  }

  .prev-btn:hover,
  .next-btn:hover {
    opacity: 1;
  }

  .prev-btn {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .next-btn svg {
    position: absolute;
    right: 0;
  }

  .next-btn {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .card-container img {
    height: 400px;
    object-fit: cover;
  }

  .all-products {
    position: absolute;
    width: 300px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 720px) {
    .content {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }
  }

  @media (min-width: 990px) {
    .content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default FeaturedProducts;
