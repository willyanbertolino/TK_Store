import {
  ADD_TO_WISH,
  REMOVE_WISH_ITEM,
  COUNT_WISH_TOTALS,
  CLEAR_WISH,
} from '../actions';

const wish_reducer = (state, action) => {
  if (action.type === ADD_TO_WISH) {
    const { id, product } = action.payload;
    const tempItem = state.wish.find((i) => i.id === id);

    if (tempItem) {
      return { ...state };
    } else {
      const newItem = {
        id: id,
        name: product.name,
        colors: product.colors,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        wish: [...state.wish, newItem],
      };
    }
  }

  if (action.type === REMOVE_WISH_ITEM) {
    const tempWish = state.wish.filter((item) => item.id !== action.payload);
    return { ...state, wish: tempWish };
  }

  if (action.type === CLEAR_WISH) {
    return { ...state, wish: [] };
  }

  if (action.type === COUNT_WISH_TOTALS) {
    const totals = state.wish.length;
    return { ...state, wish_amount: totals };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default wish_reducer;
