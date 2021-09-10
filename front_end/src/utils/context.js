import React, { useState } from 'react';

const TKStoreContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isUser, setIsUser] = useState({
    isAthenticated: false,
    isAdmin: false,
  });
  const [isLogin, setLogin] = useState({ email: '', password: '' });
  const [error, setError] = useState({ error: false, msg: '' });

  return (
    <TKStoreContext.Provider value={(isUser, error)}>
      {children}
    </TKStoreContext.Provider>
  );
};

export { AppProvider, TKStoreContext };
