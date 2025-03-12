"use client"

import { useTheme } from "@/context/ThemeContext"
import { Download, Eye } from "lucide-react"
import Paper from "@/assets/paper.svg"
import { useIsMobile } from "@/hooks/useMobile"

interface DocumentItem {
    title: string
    submissionDate: string
    onDownload?: () => void
    onView?: () => void
    count?: number
}

interface DocumentListProps {
    documents?: DocumentItem[]
    maxHeight?: string
    styles?: {
        backgroundColor?: string
        textColor?: string
        borderColor?: string
        buttonBackground?: string
        iconColor?: string
        countColor?: string
        fontSize?: {
            title?: {
                mobile?: string
                desktop?: string
            }
            date?: {
                mobile?: string
                desktop?: string
            }
            count?: {
                mobile?: string
                desktop?: string
            }
        }
        fontWeight?: {
            title?: {
                mobile?: string
                desktop?: string
            }
            date?: {
                mobile?: string
                desktop?: string
            }
            count?: {
                mobile?: string
                desktop?: string
            }
        }
        padding?: {
            container?: string
            item?: string
            iconContainer?: string
        }
        borderRadius?: {
            container?: string
            iconContainer?: string
        }
    }
    showIcons?: boolean
    showSubmittedText?: boolean
}

const defaultStyles = {
    backgroundColor: "#E2E2FC",
    textColor: "#1E1E1E",
    borderColor: "#D1D5DB",
    buttonBackground: "#E5E7EB",
    iconColor: "#2563EB",
    countColor: "#1E1E1E",
    fontSize: {
        title: {
            mobile: "1rem",
            desktop: "1.125rem",
        },
        date: {
            mobile: "0.75rem",
            desktop: "0.875rem",
        },
        count: {
            mobile: "0.875rem",
            desktop: "1rem",
        },
    },
    fontWeight: {
        title: {
            mobile: "500",
            desktop: "500",
        },
        date: {
            mobile: "400",
            desktop: "400",
        },
        count: {
            mobile: "600",
            desktop: "600",
        },
    },
    padding: {
        container: "1rem",
        item: "1rem",
        iconContainer: "0.5rem",
    },
    borderRadius: {
        container: "1rem",
        iconContainer: "0.625rem",
    },
}

export default function DocumentList({
    documents = [
        { title: "Commercial Invoice", submissionDate: "19 Feb 2025", count: 95 },
        { title: "Marks and Numbers", submissionDate: "19 Feb 2025", count: 95 },
        { title: "Booking Confirmations", submissionDate: "19 Feb 2025", count: 95 },
    ],
    maxHeight = "400px",
    styles = {},
    showIcons = false,
    showSubmittedText = true,
}: DocumentListProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    // Deep merge the styles
    const mergedStyles = {
        ...defaultStyles,
        ...styles,
        fontSize: {
            title: { ...defaultStyles.fontSize.title, ...styles.fontSize?.title },
            date: { ...defaultStyles.fontSize.date, ...styles.fontSize?.date },
            count: { ...defaultStyles.fontSize.count, ...styles.fontSize?.count },
        },
        fontWeight: {
            title: { ...defaultStyles.fontWeight.title, ...styles.fontWeight?.title },
            date: { ...defaultStyles.fontWeight.date, ...styles.fontWeight?.date },
            count: { ...defaultStyles.fontWeight.count, ...styles.fontWeight?.count },
        },
        padding: { ...defaultStyles.padding, ...styles.padding },
        borderRadius: { ...defaultStyles.borderRadius, ...styles.borderRadius },
    }

    // Get responsive font sizes and weights
    const getFontSize = (type: "title" | "date" | "count") => {
        return isMobile ? mergedStyles.fontSize[type].mobile : mergedStyles.fontSize[type].desktop
    }

    const getFontWeight = (type: "title" | "date" | "count") => {
        return isMobile ? mergedStyles.fontWeight[type].mobile : mergedStyles.fontWeight[type].desktop
    }

    return (
        <div
            style={{
                backgroundColor: mergedStyles.backgroundColor,
                borderRadius: mergedStyles.borderRadius.container,
                padding: mergedStyles.padding.container,
                maxHeight,
                overflow: "auto",
                fontFamily: theme.fonts.family,
            }}
            className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
            <div className="flex flex-col">
                {documents.map((doc, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between"
                        style={{
                            padding: mergedStyles.padding.item,
                            borderBottom: index !== documents.length - 1 ? `1px solid ${mergedStyles.borderColor}` : "none",
                        }}
                    >
                        {/* Left section with icon and text */}
                        <div className="flex items-center gap-4">
                            <img
                                src={Paper || "/placeholder.svg?height=24&width=24"}
                                alt="Document Icon"
                                style={{ height: "24px", width: "24px" }}
                            />
                            <div className="flex flex-col">
                                <span
                                    style={{
                                        fontSize: getFontSize("title"),
                                        fontWeight: getFontWeight("title"),
                                        color: mergedStyles.textColor,
                                    }}
                                >
                                    {doc.title}
                                </span>
                                {showSubmittedText && (
                                    <span
                                        style={{
                                            fontSize: getFontSize("date"),
                                            fontWeight: getFontWeight("date"),
                                            color: mergedStyles.textColor,
                                        }}
                                    >
                                        Submitted on {doc.submissionDate}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Right section with action buttons or count */}
                        <div className="flex gap-2">
                            {showIcons ? (
                                <>
                                    <div
                                        onClick={doc.onDownload}
                                        style={{
                                            backgroundColor: mergedStyles.buttonBackground,
                                            padding: mergedStyles.padding.iconContainer,
                                            borderRadius: mergedStyles.borderRadius.iconContainer,
                                            cursor: "pointer",
                                        }}
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <Download size={isMobile ? 18 : 20} color={mergedStyles.iconColor} />
                                    </div>
                                    <div
                                        onClick={doc.onView}
                                        style={{
                                            backgroundColor: mergedStyles.buttonBackground,
                                            padding: mergedStyles.padding.iconContainer,
                                            borderRadius: mergedStyles.borderRadius.iconContainer,
                                            cursor: "pointer",
                                        }}
                                        className="hover:opacity-80 transition-opacity"
                                    >
                                        <Eye size={isMobile ? 18 : 20} color={mergedStyles.iconColor} />
                                    </div>
                                </>
                            ) : (
                                <div
                                    style={{
                                        backgroundColor: mergedStyles.buttonBackground,
                                        padding: mergedStyles.padding.iconContainer,
                                        borderRadius: mergedStyles.borderRadius.iconContainer,
                                        fontSize: getFontSize("count"),
                                        fontWeight: getFontWeight("count"),
                                        color: mergedStyles.countColor,
                                    }}
                                >
                                    {doc.count || 85}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

