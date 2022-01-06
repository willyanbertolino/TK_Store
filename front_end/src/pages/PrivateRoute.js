import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../context/user_context';

const PrivateRoute = ({ children, path, ...rest }) => {
  const { isUserAuthenticated, user } = useUserContext();

  return (
    <Route
      {...rest}
      render={() => {
        if (isUserAuthenticated) {
          if (path === '/checkout') {
            return children;
          }
          if (path === '/admin') {
            return user.role === 'admin' ? children : <Redirect to="/" />;
          }
        }
        // Need to be login?
        // return <Redirect to="/login" />;
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
