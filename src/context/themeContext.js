import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const MyThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') ?? 'light'
  );

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  localStorage.setItem('theme', theme);

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
