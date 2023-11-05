import { createContext, useContext, useState } from 'react';

export const MobileMenuContext = createContext();

export const useMobileMenuContext = () => useContext(MobileMenuContext);

export const MobileMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuMode = () => setIsMenuOpen(prevState => !prevState);

  return (
    <MobileMenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
