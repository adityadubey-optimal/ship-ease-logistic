"use client"
import { useTheme } from "@/context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"
import useResponsiveSize from "@/hooks/useResponsiveSize"

interface ShipDateHeaderProps {
    poShipDate: string
    requester: string
    requestedShipDate: string
    styles?: {
        backgroundColor?: string
        textColor?: string
        accentColor?: string
    }
}

export default function ShipDateHeader({
    poShipDate = "4 Mar 25",
    requester = "Vendor",
    requestedShipDate = "25 Mar 25",
    styles = {},
}: ShipDateHeaderProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    // Compute the base responsive sizes
    const titleSize = 14 // smaller text
    const dateSize = 12   // bigger text

    // Merge provided styles with defaults
    const {
        backgroundColor = theme.colors.guageheaderColor,
        textColor = "#1E1E1E",
        accentColor = "#002B5C",
    } = styles

    // Consolidate inline styles/variables in one place
    const styleVars = {
        container: {
            background: backgroundColor,
            position: "relative" as const,
            transform: "translate(0px, 0px)",

            padding: "5px"
        },
        smallText: {
            color: textColor,
            fontSize: `${titleSize}px`,
            fontWeight: 600,
            fontFamily: theme.fonts.family,
        },
        largeText: {
            color: textColor,
            fontSize: `${dateSize}px`,
            fontWeight: 300,
            fontFamily: theme.fonts.family,
        },
        smallAccentText: {
            color: "white",
            fontSize: `${13}px`,
            fontWeight: 600,
            fontFamily: theme.fonts.family,
        },
        largeAccentText: {
            color: "white",
            fontSize: `${dateSize}px`,
            fontWeight: 600,
            fontFamily: theme.fonts.family,
            textAlign: "center"
        },
        accentContainer: {
            backgroundColor: accentColor,
            textAlign: 'centr',
            padding: "0px 5px",
            width: '25%'
        },
    }

    return (
        <div className="flex justify-between items-start  rounded-lg" style={styleVars.container}>
            {/* Left Section */}
            <div className="flex flex-col gap-1" style={{ width: '25%' }}>
                <span style={styleVars.smallText}>PO Ship-by-Date</span>
                <span style={styleVars.largeText}>{poShipDate}</span>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col gap-1" style={{ width: '25%' }}>
                <span style={styleVars.smallText}>Requester</span>
                <span style={styleVars.largeText}>{requester}</span>
            </div>

            {/* Right Section */}
            <div className="flex flex-col  gap-1 p-4 rounded-xl" style={styleVars.accentContainer}>
                <span style={styleVars.smallAccentText}>Requested Ship-by-Date</span>
                <span style={styleVars.largeAccentText}>{requestedShipDate}</span>
            </div>
        </div >
    )
}