// Persona1 theme: override some tokens from base
import { baseColors, baseFonts, baseShadows, borderRadius, statusCardStyles } from "./base";

export const persona1Theme = {
    colors: {
        ...baseColors,
        primary: "#FF4081", // Persona1's brand color
        // etc.
    },
    fonts: {
        ...baseFonts,
        // maybe a different font family or headings
    },
    shadows: {
        outer: "0 4px 8px rgba(0, 0, 0, 0.3)",
        inner: "inset 0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    borderRadius: {
        ...borderRadius
    },
    baseShadows: {
        ...baseShadows,
    },
    statusCardStyles: {
        ...statusCardStyles
    },
};