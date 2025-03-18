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
    const titleSize = useResponsiveSize(14, 16)
    const dateSize = useResponsiveSize(20, 24)

    const { backgroundColor = theme.colors.guageheaderColor, textColor = "#1E1E1E", accentColor = "#002B5C" } = styles

    return (
        <div
            className="flex justify-between items-start p-6 rounded-lg"
            style={{
                background: backgroundColor,
                position: 'relative',
                transform: 'translate(0px, 15px)',
                borderRadius: "20px"
            }}
        >
            {/* Left Section */}
            <div className="flex flex-col gap-2">
                <span
                    style={{
                        color: textColor,
                        fontSize: isMobile ? theme.fonts.mobile.body.size : `${titleSize}px`,
                        fontWeight: theme.fonts.web.heading.weight,
                        fontFamily: theme.fonts.family,
                    }}
                >
                    PO Ship-by-Date
                </span>
                <span
                    style={{
                        color: textColor,
                        fontSize: isMobile ? theme.fonts.mobile.heading.size : `${dateSize}px`,
                        fontWeight: theme.fonts.web.body.weight,
                        fontFamily: theme.fonts.family,
                    }}
                >
                    {poShipDate}
                </span>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col gap-2">
                <span
                    style={{
                        color: textColor,
                        fontSize: isMobile ? theme.fonts.mobile.body.size : `${titleSize}px`,
                        fontWeight: theme.fonts.web.heading.weight,
                        fontFamily: theme.fonts.family,
                    }}
                >
                    Requester
                </span>
                <span
                    style={{
                        color: textColor,
                        fontSize: isMobile ? theme.fonts.mobile.heading.size : `${dateSize}px`,
                        fontWeight: theme.fonts.web.body.weight,
                        fontFamily: theme.fonts.family,
                    }}
                >
                    {requester}
                </span>
            </div>

            {/* Right Section */}
            <div
                className="flex flex-col gap-2 p-4 rounded-xl"
                style={{
                    backgroundColor: accentColor,
                }}
            >
                <span
                    style={{
                        color: "white",
                        fontSize: isMobile ? theme.fonts.mobile.body.size : `${titleSize}px`,
                        fontWeight: theme.fonts.web.heading.weight,
                        fontFamily: theme.fonts.family,
                    }}
                >
                    Requested Ship-by-Date
                </span>
                <span
                    style={{
                        color: "white",
                        fontSize: isMobile ? theme.fonts.mobile.heading.size : `${dateSize}px`,
                        fontWeight: theme.fonts.web.body.weight,
                        fontFamily: theme.fonts.family,
                        textAlign: "right",
                    }}
                >
                    {requestedShipDate}
                </span>
            </div>
        </div>
    )
}

