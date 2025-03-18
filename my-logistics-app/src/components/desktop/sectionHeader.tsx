import type React from "react"
import { ArrowRight } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface DocumentHeaderProps {
    Icon?: any
    title: string
    subtitle?: string
    showSeeMore?: boolean
    onSeeMoreClick?: () => void
    containerStyle?: React.CSSProperties
    headerTextStyle?: React.CSSProperties
    subTitleTextStyle?: React.CSSProperties
    colorTheme?: string
    dateColor?: string
    date?: string
}

const DocumentHeader = ({ Icon, date, dateColor, title, subtitle, showSeeMore = false, onSeeMoreClick, containerStyle, headerTextStyle, subTitleTextStyle, colorTheme }: DocumentHeaderProps) => {
    const { theme } = useTheme()

    return (
        <div className="flex items-center justify-between w-full p-4 " style={containerStyle}>
            <div className="flex items-center gap-4">
                {Icon}
                <div className="flex flex-col">
                    <h1
                        style={{
                            fontSize: theme.fonts.web.heading.size,
                            fontWeight: theme.fonts.web.heading.weight,
                            color: colorTheme ? colorTheme : theme.colors.textPrimary,


                            lineHeight: "1.2",

                        }}
                    >
                        {date ? (<>{title} <span style={{ color: dateColor ? dateColor : theme.colors.success }}>{date}</span></>) : title}

                    </h1>
                    {subtitle && (
                        <p
                            style={{
                                fontSize: theme.fonts.web.body.size,
                                color: theme.colors.textSecondary,
                                marginTop: "4px",
                                ...subTitleTextStyle,
                            }}
                        >
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>

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

export default DocumentHeader

