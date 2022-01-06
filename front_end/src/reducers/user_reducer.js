import {
  USER_REGISTER_BEGIN,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_ERROR,
  CLEAR_USER_ERROR,
} from '../actions';

const user_reducer = (state, action) => {
  if (action.type === USER_REGISTER_BEGIN) {
    return {
      ...state,
      user_loading: true,
    };
  }
  if (action.type === USER_REGISTER_SUCCESS) {
    return {
      ...state,
      user_loading: false,
      user: action.payload,
      isUserAuthenticated: true,
    };
  }
  if (action.type === USER_REGISTER_ERROR) {
    return {
      ...state,
      user_loading: false,
      user_error_message: action.payload,
    };
  }
  if (action.type === CLEAR_USER_ERROR) {
    return {
      ...state,
      user_error_message: '',
    };
  }
  if (action.type === 'oi') {
    return {
      ...state,
    };
  }

  throw new Error(`No matching ${action.type} - action type`);
};

export default user_reducer;
