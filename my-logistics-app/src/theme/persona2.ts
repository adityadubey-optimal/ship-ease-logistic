import { baseColors, baseFonts, baseShadows, borderRadius, statusCardStyles } from "./base";

export const persona2Theme = {
    colors: {
        ...baseColors,
        primary: "#4CAF50",
    },
    fonts: {
        ...baseFonts,
    },
    shadows: {
        outer: "0 2px 6px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 6px rgba(0, 0, 0, 0.15)",
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