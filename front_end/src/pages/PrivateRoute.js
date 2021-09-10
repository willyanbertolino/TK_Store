import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/login';

const PrivateRoute = ({ children, path, ...rest }) => {
  const { isAuthenticated, isAdmin } = isLogin();

  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthenticated) {
          if (path === '/') {
            return children;
          }
          if (path === '/admin') {
            return isAdmin ? children : <Redirect to="/" />;
          }
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
