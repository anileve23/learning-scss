import React, { createContext, useState, ReactNode } from "react";

export const ThemeContext = createContext<{ theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> } | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
