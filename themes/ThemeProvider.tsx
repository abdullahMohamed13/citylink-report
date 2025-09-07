import { createContext, ReactNode, useContext, useState } from "react";
import { themes } from "./themes";

export type ThemeName = keyof typeof themes;

interface ThemeContextProps {
    theme: typeof themes[ThemeName];
    currentTheme: ThemeName
    setCurrentTheme: (name: ThemeName) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export default function ThemeProvider({children}: {children: ReactNode}) {
    const [currentTheme, setCurrentTheme] = useState<ThemeName>('dark');
    const theme = themes[currentTheme]

    return <ThemeContext.Provider value={{currentTheme, theme, setCurrentTheme}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if(!ctx) throw new Error("useTheme must be used within ThemeProvider");
    return ctx
}
