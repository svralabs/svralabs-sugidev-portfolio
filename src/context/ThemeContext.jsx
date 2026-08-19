import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
    },
    fonts: {
      heading: 'var(--font-heading)',
      body: 'var(--font-body)',
    },
  });

  const toggleTheme = () => {
    console.warn('Theme toggle not implemented yet');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <style>
        {`
          :root {
            --color-primary: #FF8C00;
            --color-secondary: #FF4500;
            --color-background: #1A1A1A;
            --color-text: #FFFFFF;
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Roboto', sans-serif;
          }
        `}
      </style>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
