/**
 * Basic shared tokens from your style guide,
 * now including detailed font hierarchy for web & mobile.
 */

import { Weight } from "lucide-react"

export function getResponsiveSize(minSize: number, maxSize: number) {
    // Define your breakpoints (in pixels)
    const minViewport = 800;
    const maxViewport = 1700;
    const vw = typeof window !== 'undefined' ? window.innerWidth : maxViewport;

    // If viewport is below the minimum, return the minimum size
    if (vw <= minViewport) return minSize;
    // If viewport is above the maximum, return the maximum size
    if (vw >= maxViewport) return maxSize;

    // Calculate the linear ratio between the breakpoints (0 to 1)
    const ratio = (vw - minViewport) / (maxViewport - minViewport);
    return minSize + ratio * (maxSize - minSize);
}


export const baseColors = {

    authPageheadingColor: '#767676',
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

    borderColor: '#B8C2FF',
    statusCardErrorBackground: '#FFE3E3',

    dataTableBackground: "#D0D7FF",
    guageheaderColor: '#C4CDFF',
    notificationCardTextHeaderColor: '#002B75',
    vnedorText: '#616161',
}

export const baseFonts = {
    // Base font family
    family: "'Open Sans', sans-serif",

    // Font Hierarchy - Web
    web: {

        authPage: {
            heading: {
                size: getResponsiveSize(2.0, 2.5) + "rem", // 2.5rem at max, 2.0rem at min
                weight: "600",
            },
            label: {
                size: getResponsiveSize(1.0, 1.25) + "rem",
                weight: "700",
            },
            placeholder: {
                size: getResponsiveSize(0.8, 1.0) + "rem",
                weight: "400",
            },
            inputFont: {
                size: getResponsiveSize(0.9, 1.125) + "rem",
                weight: "400",
            },
            error: {
                size: getResponsiveSize(0.68, 0.85) + "rem",
                weight: "300",
            },
            button: {
                size: getResponsiveSize(1.2, 1.5) + "rem",
                weight: "700",
            },
        },



        buyerHomePage: {
            statusCard: {
                headerFont: {
                    // Base sizes: 1.6rem at 800px and 2rem at 1700px
                    size: getResponsiveSize(1.3, 1.75) + "rem",
                    weight: "600"
                },
                pageHeaderFont: {
                    size: getResponsiveSize(1, 1.2) + "rem",
                    weight: "600"
                },
                pageHeaderLight: {
                    size: getResponsiveSize(0.9, 1) + "rem",
                    weight: "400"
                },
                shipHeader: {
                    size: getResponsiveSize(1, 1.3) + "rem",
                    weight: "300"
                },
                dateFont: {
                    size: getResponsiveSize(1, 1.3) + "rem",
                    weight: "600"
                },
                calendarFont: {
                    size: getResponsiveSize(2.0, 3) + "rem",
                    weight: "700"
                },
                calendarDescription: {
                    size: getResponsiveSize(1.34, 1.55) + "rem",
                    weight: "500"
                },
                calendarDate: {
                    size: getResponsiveSize(1.34, 1.55) + "rem",
                    weight: "700"
                }
            },
            poBookingCard: {
                poBookingPercentageFont: {
                    size: getResponsiveSize(1.75, 3.2) + "rem",
                    weight: "800"
                },
                pobokingDescription: {
                    size: getResponsiveSize(1.2, 2) + "rem",
                    weight: "600"
                },
                statusMessage: {
                    size: getResponsiveSize(0.8, 1) + "rem",
                    weight: "600"
                },
                daysFont: {
                    size: getResponsiveSize(0.8, 1.15) + "rem",
                    weight: "600"
                }
            }
        },
        venderDetialsPage: {
            label: {
                size: getResponsiveSize(1.2, 1.5) + "rem",
                weight: "300"
            },
            value: {
                size: getResponsiveSize(1.2, 1.5) + "rem",
                weight: "500"
            },
            infoHeader: {
                size: getResponsiveSize(0.8, 1) + "rem",
                weight: "500"
            },
            infoDescription: {
                size: getResponsiveSize(1.2, 1.5) + "rem",
                weight: "300"
            },
            shipingButtonFont: {
                size: getResponsiveSize(1.15, 1.25) + "rem",
                weight: "600"
            }
        },




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
        inputFont: {
            size: "1rem",
            weight: "400", // bold
        },
        notification: {
            size: "14px",
            weight: "400", // regular
            notificationCardWeight: '800'
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
        },

    },



    // Font Hierarchy - Mobile
    mobile: {
        authPage: {
            heading: {
                size: "1.75rem",
                weight: "600", // bold
            },
            label: {
                size: "1.125rem",
                weight: "500", // bold
            },
            inputFont: {
                size: "1rem",
                weight: "400", // bold
            },
            placeholder: {
                size: "1rem",
                weight: "400", // bold
            },
            error: {
                size: "0.8rem",
                weight: "300", // bold
            },
            button: {
                size: "1rem",
                weight: "700", // bold
            },
        },
        buyerHomePage: {
            statusCard: {
                headerFont: {
                    // Base sizes: 1.6rem at 800px and 2rem at 1700px
                    size: 1 + "rem",
                    weight: "600"
                },
                pageHeaderFont: {
                    size: 0.9 + "rem",
                    weight: "600"
                },
                pageHeaderLight: {
                    size: 0.75 + "rem",
                    weight: "400"
                },
                shipHeader: {
                    size: getResponsiveSize(1.44, 1.8) + "rem",
                    weight: "300"
                },
                dateFont: {
                    size: getResponsiveSize(1.44, 1.8) + "rem",
                    weight: "600"
                },
                calendarFont: {
                    size: getResponsiveSize(2.0, 3) + "rem",
                    weight: "700"
                },
                calendarDescription: {
                    size: 0.75 + "rem",
                    weight: "500"
                },
                calendarDate: {
                    size: 0.75 + "rem",
                    weight: "700"
                }
            },
            poBookingCard: {
                poBookingPercentageFont: {
                    size: 1.3 + "rem",
                    weight: "800"
                },
                pobokingDescription: {
                    size: 1.05 + "rem",
                    weight: "600"
                },
                statusMessage: {
                    size: 0.8 + "rem",
                    weight: "600"
                },
                daysFont: {
                    size: getResponsiveSize(0.8, 1.15) + "rem",
                    weight: "600"
                }
            }
        },
        SectionHeader: {
            title: {
                size: "1.05rem",
                weight: "600",
            },
            subtitle: {
                size: "0.65rem",
                weight: "300",
            },


        },


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

