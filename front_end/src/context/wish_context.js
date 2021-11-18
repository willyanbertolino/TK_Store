import React, { useReducer, useEffect, useContext } from 'react';
import reducer from '../reducers/wish_reducer';
import {
  ADD_TO_WISH,
  REMOVE_WISH_ITEM,
  COUNT_WISH_TOTALS,
  CLEAR_WISH,
} from '../actions';

const getLocalStorage = () => {
  let wish = localStorage.getItem('wish');

  if (wish) {
    return JSON.parse(wish);
  } else {
    return [];
  }
};

const initialState = {
  wish: getLocalStorage(),
  wish_amount: 0,
};

const WishContext = React.createContext();

export const WishProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to wish
  const addToWish = (id, product) => {
    dispatch({ type: ADD_TO_WISH, payload: { id, product } });
  };

  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_WISH_ITEM, payload: id });
  };

  // clear wish list
  const clearWish = () => {
    dispatch({ type: CLEAR_WISH });
  };

  useEffect(() => {
    localStorage.setItem('wish', JSON.stringify(state.wish));
    dispatch({ type: COUNT_WISH_TOTALS });
  }, [state.wish]);

  return (
    <WishContext.Provider
      value={{ ...state, addToWish, removeItem, clearWish }}
    >
      {children}
    </WishContext.Provider>
  );
};

export const useWishContext = () => {
  return useContext(WishContext);
};
