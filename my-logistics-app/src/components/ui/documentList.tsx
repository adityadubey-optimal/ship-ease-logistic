import type React from "react"
import Document from "@assets/document.svg"
import { Download, Eye } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import Paper from "@assets/paper.svg"
import { useIsMobile } from "@/hooks/useMobile"
interface DocumentListProps {
    documentName: string
    submittedDate?: string
    count?: number
    onDownload?: () => void
    onView?: () => void
}

export const DocumentList: React.FC<DocumentListProps> = ({
    documentName = "Commercial Invoices",
    submittedDate,
    count,
    onDownload,
    onView,
}) => {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    return (
        <div
            className="flex items-center justify-between p-4 rounded-lg"
            style={{
                borderBottom: `2px solid ${theme.colors.borderBottom}`
            }}
        >
            <div className="flex items-center gap-3">
                <img
                    src={Paper || "/placeholder.svg"}
                    alt="Document icon"
                    className="w-6 h-6"
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
                                fontSize: isMobile ? theme.fonts.mobile.DocumentSubTitleText.size : theme.fonts.web.DocumentSubTitleText.size,
                                fontWeight: isMobile ? theme.fonts.mobile.DocumentSubTitleText.weight : theme.fonts.web.DocumentSubTitleText.weight,
                                fontFamily: theme.fonts.family,
                            }}
                        >
                            Submitted on {submittedDate}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-4">
                {count !== undefined && (
                    <div
                        className="px-3 py-1"
                        style={{
                            backgroundColor: theme.colors.secondary,
                            borderRadius: theme.borderRadius.borderRadius
                        }}
                    >
                        <span
                            style={{
                                color: theme.colors.primary,
                                fontSize: isMobile ? theme.fonts.mobile.DocumentSubTitleText.size : theme.fonts.web.DocumentText.size,
                                fontWeight: isMobile ? theme.fonts.mobile.DocumentSubTitleText.weight : theme.fonts.web.DocumentText.weight,
                                fontFamily: theme.fonts.family,
                            }}
                        >
                            {count}
                        </span>
                    </div>
                )}

                <div className="flex items-center gap-3">
                    {onDownload && (
                        <button onClick={onDownload} className="p-2 rounded-lg hover:bg-white/50 transition-colors">
                            <Download className="w-5 h-5" style={{ color: theme.colors.textPrimary }} />
                        </button>
                    )}
                    {onView && (
                        <button onClick={onView} className="p-2 rounded-lg hover:bg-white/50 transition-colors">
                            <Eye className="w-5 h-5" style={{ color: theme.colors.textPrimary }} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}