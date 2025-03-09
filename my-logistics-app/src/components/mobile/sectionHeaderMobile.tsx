

"use client"

import type React from "react"
import { ArrowRight, CircleArrowRight } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface DocumentHeaderProps {
    Icon?: any
    title: string
    subtitle?: string
    showSeeMore?: boolean
    onSeeMoreClick?: () => void
    onSeeMoreIconClick?: () => void
    showSeeMoreIcon?: boolean
    /** Optional inline styles for the topmost container */
    containerStyle?: React.CSSProperties
}

export default function DocumentHeader({
    Icon,
    title,
    subtitle,
    showSeeMore = false,
    onSeeMoreClick,
    showSeeMoreIcon,
    containerStyle,
    onSeeMoreIconClick
}: DocumentHeaderProps) {
    const { theme } = useTheme()

    return (
        <div
            className="flex items-center justify-between w-full"
            style={containerStyle} // Apply custom container styles
        >
            <div className="flex items-center gap-4">
                {Icon}
                <div className="flex flex-col">
                    <h1
                        style={{
                            fontSize: theme.fonts.mobile.SectionHeader.title.size,
                            fontWeight: theme.fonts.mobile.SectionHeader.title.weight,
                            color: theme.colors.textPrimary,
                            lineHeight: "1.2",
                        }}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p
                            style={{
                                fontSize: theme.fonts.mobile.SectionHeader.subtitle.size,
                                fontWeight: theme.fonts.mobile.SectionHeader.subtitle.weight,
                                color: theme.colors.textSecondary,
                                marginTop: "4px",
                            }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

            {showSeeMoreIcon && (
                <CircleArrowRight
                    onClick={onSeeMoreIconClick}
                    className="w-5 h-5"
                    style={{ color: theme.colors.textPrimary, height: "25px", width: "25px" }}
                />
            )}

            {showSeeMore && (
                <button
                    onClick={onSeeMoreClick}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    style={{
                        fontSize: theme.fonts.web.body.size,
                        color: theme.colors.textPrimary,
                    }}
                >
                    See More
                    <ArrowRight className="w-5 h-5" />
                </button>
            )}
        </div>
    )
}
