import React, { useState, useContext, useEffect } from 'react';

const NavbarContext = React.createContext();

export const NavbarProvider = ({ children }) => {
  const [page, setPage] = useState('home');
  const [sidebar, setSidebar] = useState(false);

  // navbar update when click on back history browser button

  const updatePage = () => {
    let path = window.location.pathname.substring(1);

    if (path === '') {
      path = 'home';
    }

    return path;
  };

  useEffect(() => {
    window.addEventListener('popstate', () => {
      setPage(updatePage());
    });
  }, []);

  useEffect(() => {
    setPage(updatePage());
  });

  // change page and update navibar links
  const changePage = (page) => {
    setPage(page);
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
      value={{
        page,
        sidebar,
        openSidebar,
        closeSidebar,
        changePage,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};
