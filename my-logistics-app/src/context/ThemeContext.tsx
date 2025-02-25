import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { ThemeType } from "@/theme";
import { getTheme } from "@/theme";

/**
 * Shape of the ThemeContext data
 */
interface IThemeContext {
    theme: ThemeType;
    setThemeName: React.Dispatch<React.SetStateAction<string>>;
    themeName: string;
}

const ThemeContext = createContext<IThemeContext>({
    theme: getTheme("default"),
    setThemeName: () => { },
    themeName: "default",
});

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [themeName, setThemeName] = useState("default");
    const theme = getTheme(themeName);

    // Debugging log
    console.log('Current Theme:', themeName, 'Theme Object:', theme);

    return (
        <ThemeContext.Provider value={{
            theme,
            themeName,
            setThemeName,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

/**
 * A simple hook to consume the ThemeContext in any component
 */
export function useTheme() {
    return useContext(ThemeContext);
}