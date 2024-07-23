import { createContext } from 'react';
import { theme } from './theme';

type ThemeContexProvider = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContexProvider) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
