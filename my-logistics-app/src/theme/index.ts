import { defaultTheme } from "./default";
import { persona1Theme } from "./persona1";
import { persona2Theme } from "./persona2";

// Type definition for a theme
export type ThemeType = typeof defaultTheme;

// Simple function to get a theme by name
export function getTheme(themeName: string): ThemeType {
    console.log("themeName", themeName);
    switch (themeName) {
        case "persona1":
            return persona1Theme;
        case "persona2":
            return persona2Theme;
        default:
            return defaultTheme;
    }
}