// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  const theme = {
    isDarkMode,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};





