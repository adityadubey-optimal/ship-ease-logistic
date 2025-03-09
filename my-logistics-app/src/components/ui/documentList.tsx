

"use client"

import type React from "react"
import { Download, Eye, Folder } from "lucide-react"
import { useTheme } from "@/context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"
import useResponsiveSize from "@/hooks/useResponsiveSize"

interface DocumentListProps {
    documentName: string
    submittedDate?: string
    count?: number
    onDownload?: () => void
    onView?: () => void
    showIcons?: boolean
}

export const DocumentList: React.FC<DocumentListProps> = ({
    documentName = "Commercial Invoices",
    submittedDate,
    count,
    onDownload,
    onView,
    showIcons = true,
}) => {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    const iconSize = useResponsiveSize(20, 24) // Min 20px, Max 24px for icons

    return (
        <div
            className="flex items-center justify-between p-4"
            style={{
                backgroundColor: theme.colors.secondary,

            }}
        >
            <div className="flex items-center gap-3">
                <Folder
                    size={iconSize}
                    style={{
                        color: theme.colors.primary,
                    }}
                />
                <div className="flex flex-col">
                    <span
                        style={{
                            color: theme.colors.textPrimary,
                            fontSize: isMobile ? theme.fonts.mobile.DocumentText.size : theme.fonts.web.DocumentText.size,
                            fontWeight: isMobile ? theme.fonts.mobile.DocumentText.weight : theme.fonts.web.DocumentText.weight,
                            fontFamily: theme.fonts.family,
                        }}
                    >
                        {documentName}
                    </span>
                    {submittedDate && (
                        <span
                            style={{
                                color: theme.colors.textSecondary,
                                fontSize: isMobile
                                    ? theme.fonts.mobile.DocumentSubTitleText.size
                                    : theme.fonts.web.DocumentSubTitleText.size,
                                fontWeight: isMobile
                                    ? theme.fonts.mobile.DocumentSubTitleText.weight
                                    : theme.fonts.web.DocumentSubTitleText.weight,
                                fontFamily: theme.fonts.family,
                            }}
                        >
                            Submitted on {submittedDate}
                        </span>
                    )}
                </div>
            </div>

            {showIcons && (
                <div className="flex items-center gap-4">
                    {count !== undefined && (
                        <div
                            className="px-3 py-1"
                            style={{
                                backgroundColor: theme.colors.thertiary,
                                borderRadius: theme.borderRadius.borderRadius,
                            }}
                        >
                            <span
                                style={{
                                    color: theme.colors.primary,
                                    fontSize: isMobile ? theme.fonts.mobile.DocumentSubTitleText.size : theme.fonts.web.DocumentText.size,
                                    fontWeight: isMobile
                                        ? theme.fonts.mobile.DocumentSubTitleText.weight
                                        : theme.fonts.web.DocumentText.weight,
                                    fontFamily: theme.fonts.family,
                                }}
                            >
                                {count}
                            </span>
                        </div>
                    )}

                    <div className="flex items-center gap-3">
                        {onDownload && (
                            <button
                                onClick={onDownload}
                                className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                                style={{ color: theme.colors.textPrimary }}
                            >
                                <Download size={iconSize} />
                            </button>
                        )}
                        {onView && (
                            <button
                                onClick={onView}
                                className="p-2 rounded-lg hover:bg-white/50 transition-colors"
                                style={{ color: theme.colors.textPrimary }}
                            >
                                <Eye size={iconSize} />
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}


