/**
 * Basic shared tokens from your style guide,
 * now including detailed font hierarchy for web & mobile.
 */

import { Weight } from "lucide-react"

export const baseColors = {
    // Primary & Secondary
    primary: "#144BCC",
    secondary: "#D0D7FF",
    thertiary: "#E2E2FC",

    // Status Colors
    success: "#00901F", // Updated green color for status cards
    warning: "#FF992C", // New orange color for warning status
    error: "#E34040", // Updated red color for error status
    errorBgNotification: "#FFD5D5",


    // Original Status Colors (keeping for backward compatibility)
    successOriginal: "#81B955",
    errorOriginal: "#F55142",
    warningOriginal: "#FBC02D",

    // Background Colors
    background: "linear-gradient(0deg, #D0D7FF 7.29%, #DDE2FF 42.46%, #FFF 135.46%)",
    successBg: "#F3F0FF", // Light purple background for success card
    warningBg: "#F3F0FF", // Light purple background for warning card
    errorBg: "#FFE8E8", // Light red background for error card
    cardBackground: "#D0D7FF",

    // Text Colors
    textPrimary: "#1E1E1E",
    textSecondary: "#666666",

    borderBottom: "#BEC8FF",

    borderColor: '#B8C2FF'
}

export const baseFonts = {
    // Base font family
    family: "'Open Sans', sans-serif",

    // Font Hierarchy - Web
    web: {
        heading: {
            size: "26px",
            weight: "700", // bold
        },
        secondaryHeading: {
            size: "24px",
            weight: "700", // bold
        },
        body: {
            size: "15px",
            weight: "600", // semibold
        },
        notification: {
            size: "11px",
            weight: "400", // regular
            notificationCardWeight: '600'
        },

        // New additions for status cards
        statusNumber: {
            size: "32px",
            weight: "700", // bold
        },
        statusTitle: {
            size: "18px",
            weight: "600", // semibold
        },
        statusSubtitle: {
            size: "14px",
            weight: "400", // regular
        },

        DocumentText: {
            size: '20px',
            weight: '500'
        },

        DocumentSubTitleText: {
            size: '15px',
            weight: '400'
        },
        statusText: {
            size: "32px",
            weight: '700'
        },
        statusCircleRadius: {
            radius: 36
        },
        statusCircleStrokeWidth: {
            strokeWidth: 6
        }


    },

    // Font Hierarchy - Mobile
    mobile: {
        signupPageLink: {
            size: '20px',
            weight: '700'
        },
        heading: {
            size: "15px",
            weight: "700", // bold
        },
        secondaryHeading: {
            size: "10px",
            weight: "600", // semibold
        },
        body: {
            size: "10px",
            weight: "600", // semibold
        },
        notification: {
            size: "8px",
            weight: "400", // regular
            notificationCardWeight: '600'
        },
        DocumentText: {
            size: '16px',
            weight: '500'
        },

        DocumentSubTitleText: {
            size: '15px',
            weight: '400'
        },
        // New additions for status cards
        statusNumber: {
            size: "24px",
            weight: "700", // bold
        },
        statusTitle: {
            size: "14px",
            weight: "600", // semibold
        },
        statusSubtitle: {
            size: "12px",
            weight: "400", // regular
        },
        statusText: {
            size: "24px",
            weight: '700'
        },
        statusCircleRadius: {
            radius: 30
        },
        statusCircleStrokeWidth: {
            strokeWidth: 4
        }
    },
}

export const baseShadows = {
    outer: "0 2px 4px rgba(0, 0, 0, 0.2)",
    card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    cardWithSpread: "0 13.42px 20.12px rgba(0, 0, 0, 0.15), 0 0 6.71px rgba(0, 0, 0, 0.15)",
}

export const borderRadius = {
    borderRadius: "8px",
    card: "12px",
}

// New addition: Status Card specific styles
export const statusCardStyles = {
    padding: {
        desktop: "24px",
        mobile: "16px",
    },
    circle: {
        size: {
            desktop: "80px",
            mobile: "60px",
        },
        strokeWidth: "2px",
    },
    gap: {
        desktop: "16px",
        mobile: "12px",
    },
}

// 

