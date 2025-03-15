"use client"

import React from "react"
import { useTheme } from "@/context/ThemeContext"
import Paper from "@/assets/paper.svg"
import { useIsMobile } from "@/hooks/useMobile"
import { toast } from "sonner" // Using Sonner from Shadcn
import { Button } from '@/components/ui/button'
import useResponsiveSize from "@/hooks/useResponsiveSize"

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
    showDownloadButton?: boolean
}

const defaultStyles = {
    backgroundColor: "#E2E2FC",
    textColor: "#1E1E1E",
    borderColor: "#D1D5DB",
    buttonBackground: "#E5E7EB",
    iconColor: "#2563EB",
    countColor: "#1E1E1E",

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
    // We won’t use showIcons in this new version
    showIcons = false,
    showSubmittedText = true,
    showDownloadButton = false,
}: DocumentListProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    // Merge the custom styles
    const mergedStyles = {
        ...defaultStyles,
        ...styles,

        padding: { ...defaultStyles.padding, ...styles.padding },
        borderRadius: { ...defaultStyles.borderRadius, ...styles.borderRadius },
        buttonBackground: theme.colors.primary,
        countColor: "white",
        backgroundColor: 'white',

    }

    const styleObj = {
        fontSize: {
            title: {
                mobile: `1rem`,
                desktop: `${useResponsiveSize(0.85, 1.025)}rem`,
            },
            date: {
                mobile: "0.75rem",
                desktop: `${useResponsiveSize(0.65, 1.05)}rem`,
            },
            count: {
                mobile: "0.875rem",
                desktop: `${useResponsiveSize(0.75, 0.9)}rem`,
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
    }

    // Get responsive font sizes and weights
    const getFontSize = (type: "title" | "date" | "count") => {

        return isMobile
            ? styleObj.fontSize[type].mobile
            : styleObj.fontSize[type].desktop
    }

    const getFontWeight = (type: "title" | "date" | "count") => {
        return isMobile
            ? styleObj.fontWeight[type].mobile
            : styleObj.fontWeight[type].desktop
    }

    // Create a ref for a hidden file input per document item
    const fileInputRefs = documents.map(() => React.createRef<HTMLInputElement>())

    // Open the hidden file input
    const handleUploadClick = (index: number) => {
        const inputRef = fileInputRefs[index].current
        if (inputRef) {
            inputRef.click()
        }
    }

    // Handle file selection and simulate an upload
    const handleFileChange = (index: number, files: FileList | null) => {
        if (!files || files.length === 0) return

        // Show "Uploading..." toast
        toast("Uploading...")

        // Simulate an async upload (2 seconds)
        setTimeout(() => {
            const didSucceed = Math.random() > 0.5
            if (didSucceed) {
                toast.success(`Upload successful! File "${files[0].name}"`)
            } else {
                toast.error("Upload failed. Please try again later.")
            }
        }, 2000)
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
                boxShadow: '0px 10px 15px 5px rgba(0, 0, 0, 0.15)'
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
                            borderBottom:
                                index !== documents.length - 1
                                    ? `1px solid ${mergedStyles.borderColor}`
                                    : "none",
                        }}
                    >
                        {/* Left section: document icon, title, and submission date */}
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
                                {/* {showSubmittedText && (
                                    <span
                                        style={{
                                            fontSize: getFontSize("date"),
                                            fontWeight: getFontWeight("date"),
                                            color: mergedStyles.textColor,
                                        }}
                                    >
                                        Submitted on {doc.submissionDate}
                                    </span>
                                )} */}
                            </div>
                        </div>

                        {/* Right section: "Upload" button and hidden file input */}
                        <div style={(isMobile && showDownloadButton) ? { display: 'flex', flexDirection: 'column', gap: '10px' } : { display: 'flex', flexDirection: 'row', gap: '25px' }}>
                            <div className="flex gap-2 items-center">
                                <Button
                                    onClick={() => handleUploadClick(index)}
                                    style={{
                                        backgroundColor: mergedStyles.buttonBackground,
                                        padding: "0.5rem 1rem",
                                        borderRadius: mergedStyles.borderRadius.iconContainer,
                                        fontSize: getFontSize("count"),
                                        fontWeight: getFontWeight("count"),
                                        color: mergedStyles.countColor,
                                        cursor: "pointer",
                                        border: `1px solid ${mergedStyles.borderColor}`,
                                        width: '100%'
                                    }}
                                >
                                    Upload
                                </Button>

                                {/* Hidden file input for single file upload */}
                                <input
                                    ref={fileInputRefs[index]}
                                    type="file"
                                    style={{ display: "none" }}
                                    multiple={false}
                                    onChange={(e) => handleFileChange(index, e.target.files)}
                                />
                            </div>
                            {showDownloadButton && <div className="flex gap-2 items-center">
                                <Button
                                    // onClick={() => handleUploadClick(index)}
                                    style={{
                                        backgroundColor: mergedStyles.buttonBackground,
                                        padding: "0.5rem 1rem",
                                        borderRadius: mergedStyles.borderRadius.iconContainer,
                                        fontSize: getFontSize("count"),
                                        fontWeight: getFontWeight("count"),
                                        color: mergedStyles.countColor,
                                        cursor: "pointer",
                                        border: `1px solid ${mergedStyles.borderColor}`,
                                        width: '100%'
                                    }}
                                >
                                    Downlaod
                                </Button>

                                {/* Hidden file input for single file upload */}
                                <input
                                    ref={fileInputRefs[index]}
                                    type="file"
                                    style={{ display: "none" }}
                                    multiple={false}
                                    onChange={(e) => handleFileChange(index, e.target.files)}
                                />
                            </div>
                            }
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}