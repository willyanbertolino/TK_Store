import React, { useReducer, useContext } from 'react';
import reducer from '../reducers/user_reducer';
import {
  USER_REGISTER_BEGIN,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  CLEAR_USER_ERROR,
} from '../actions';
import { api } from '../utils/constants';

const initialState = {
  user_loading: false,
  user: {},
  user_error_message: '',
  isUserAuthenticated: false,
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerUser = async (user) => {
    dispatch({ type: USER_REGISTER_BEGIN });

    try {
      const { data } = await api.post('/api/v1/auth/register', user);

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: USER_REGISTER_ERROR, payload: error.response.data.msg });
    }
  };

  const clearError = () => {
    dispatch({ type: CLEAR_USER_ERROR });
  };

  return (
    <UserContext.Provider value={{ ...state, registerUser, clearError }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
