import type React from "react"
import { ArrowRight } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface DocumentHeaderProps {
    Icon?: any
    title: string
    subtitle?: string
    showSeeMore?: boolean
    onSeeMoreClick?: () => void
}

const DocumentHeader = ({ Icon, title, subtitle, showSeeMore = false, onSeeMoreClick }: DocumentHeaderProps) => {
    const { theme } = useTheme()

    return (
        <div className="flex items-center justify-between w-full p-4 ">
            <div className="flex items-center gap-4">
                {Icon}
                <div className="flex flex-col">
                    <h1
                        style={{
                            fontSize: theme.fonts.web.heading.size,
                            fontWeight: theme.fonts.web.heading.weight,
                            color: theme.colors.textPrimary,
                            lineHeight: "1.2",
                        }}
                    >
                        {title}
                    </h1>
                    {subtitle && (
                        <p
                            style={{
                                fontSize: theme.fonts.web.body.size,
                                color: theme.colors.textSecondary,
                                marginTop: "4px",
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

