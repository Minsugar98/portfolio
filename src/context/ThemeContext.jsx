import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = '#1a1a1a';
    document.body.style.color = '#ffffff';
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.style.backgroundColor = isDark ? '#f5f5f5' : '#1a1a1a';
    document.body.style.color = isDark ? '#000000' : '#ffffff';
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
