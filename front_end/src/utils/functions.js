export const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const checkNumber = (i, max) => {
  if (i > max) {
    return 0;
  }
  if (i < 0) {
    return max;
  }

  return i;
};

export const sliderClassCss = (num, productIndex, index, max) => {
  let position = 'nextSlide';
  if (num === 1) {
    if (productIndex === index) {
      position = 'activeSlide active';
    }
    if (productIndex === index - 1 || (index === 0 && productIndex === max)) {
      position = 'lastSlide';
    }
    return position;
  }
  if (num === 2) {
    if (productIndex === index) {
      position = 'activeSlide active1';
    }
    if (productIndex === index + 1 || (index === max && productIndex === 0)) {
      position = 'activeSlide active2';
    }
    if (productIndex === index - 1 || (index === 0 && productIndex === max)) {
      position = 'lastSlide';
    }
  }

  if (num === 3) {
    if (productIndex === index) {
      position = 'activeSlide active1';
    }
    if (productIndex === index + 1 || (index === max && productIndex === 0)) {
      position = 'activeSlide active2';
    }
    if (
      productIndex === index + 2 ||
      (index === max && productIndex === 1) ||
      (index === max - 1 && productIndex === 0)
    ) {
      position = 'activeSlide active3';
    }

    if (productIndex === index - 1 || (index === 0 && productIndex === max)) {
      position = 'lastSlide';
    }
  }
  return position;
};

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);

  if (type === 'colors') {
    unique = unique.flat();
  }

  return ['all', ...new Set(unique)];
};
