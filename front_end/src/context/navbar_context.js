import React, { useState, useContext } from 'react';

const NavbarContext = React.createContext();

export const NavbarProvider = ({ children }) => {
  const [page, setPage] = useState('home');
  const [sidebar, setSidebar] = useState(false);

  const changePage = (pageName) => {
    setPage(pageName);
    setSidebar(false);
  };

  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <NavbarContext.Provider
      value={{ page, sidebar, openSidebar, closeSidebar, changePage }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};
