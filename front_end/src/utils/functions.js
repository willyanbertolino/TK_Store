export const formatPrice = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};

export const checkNumber = (num, index, max) => {
  if (num === 1) {
    if (index > max) {
      return 0;
    }
    if (index < 0) {
      return max;
    }
  }
  if (num === 2) {
    if (index > max) {
      if (index - max === 1) {
        return 0;
      }
      if (index - max === 2) {
        return 1;
      }
    }
    if (index < 0) {
      if (index === -1) {
        return max;
      }
      if (index === -2) {
        return max - 1;
      }
    }
  }
  if (num === 3) {
    if (index > max) {
      if (index - max === 1) {
        return 0;
      }
      if (index - max === 2) {
        return 1;
      }
      if (index - max === 3) {
        return 2;
      }
    }
    if (index < 0) {
      if (index === -1) {
        return max;
      }
      if (index === -2) {
        return max - 1;
      }
      if (index === -3) {
        return max - 2;
      }
    }
  }
  return index;
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
    if (
      productIndex === index - 1 ||
      (index === 0 && productIndex === max) ||
      productIndex === index - 2 ||
      (index === 1 && productIndex === max) ||
      (index === 0 && productIndex === max - 1)
    ) {
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

    if (
      productIndex === index - 1 ||
      productIndex === index - 2 ||
      productIndex === index - 3 ||
      (index === 0 && productIndex === max) ||
      (index === 0 && productIndex === max - 1) ||
      (index === 0 && productIndex === max - 2) ||
      (index === 1 && productIndex === max) ||
      (index === 1 && productIndex === max - 1) ||
      (index === 2 && productIndex === max)
    ) {
      position = 'lastSlide';
    }
  }
  return position;
};
