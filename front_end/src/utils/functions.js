export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const checkNumber = (num, number, max) => {
  if (num === 1) {
    if (number > max - 1) {
      return 0;
    }
    if (number < 0) {
      return max - 1;
    }
  }
  if (num === 2) {
    if (number > max - 1) {
      if (number - (max - 1) === 1) {
        return 0;
      }
      if (number - (max - 1) === 2) {
        return 1;
      }
    }
    if (number < 0) {
      if (number === -1) {
        return max - 1;
      }
      if (number === -2) {
        return max - 2;
      }
    }
  }
  if (num === 3) {
    if (number > max - 1) {
      if (number - (max - 1) === 1) {
        return 0;
      }
      if (number - (max - 1) === 2) {
        return 1;
      }
      if (number - (max - 1) === 3) {
        return 2;
      }
    }
    if (number < 0) {
      if (number === -1) {
        return max - 1;
      }
      if (number === -2) {
        return max - 2;
      }
      if (number === -3) {
        return max - 3;
      }
    }
  }
  return number;
};
