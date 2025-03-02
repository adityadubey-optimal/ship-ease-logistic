"use client"

import React from "react"
import { useTheme } from "@/context/ThemeContext"
import DocumentHeader from "@/components/desktop/sectionHeader"// adjust import as needed
import { DocumentList } from "@/components/ui/documentList"      // adjust import as needed
import Document from "@/assets/Document.svg"   // adjust import as needed

interface DocumentationOverviewProps {
    // Optionally, you can pass data or callbacks if needed
    onSeeMoreClick?: () => void
}

export default function DocumentationOverview({ onSeeMoreClick }: DocumentationOverviewProps) {
    const { theme } = useTheme()

    return (
        <div
            className="w-full max-w-7xl mx-auto p-4"
            style={{
                background: theme.colors.thertiary,
                borderRadius: "12px",
            }}
        >
            <DocumentHeader
                Icon={<img src={Document} alt="Document illustration" className="w-10 h-10 object-contain" />}
                title="Documentation Overview"
                subtitle="Documents uploaded in the portal"
                onSeeMoreClick={onSeeMoreClick || (() => console.log("See More clicked"))}
            />
            <div className="w-full p-5">
                <DocumentList
                    showIcons
                    documentName="Commercial Invoices"
                    onDownload={() => console.log("Download clicked")}
                    onView={() => console.log("View clicked")}
                />
                <DocumentList
                    showIcons
                    documentName="Commercial Invoices"
                    onDownload={() => console.log("Download clicked")}
                    onView={() => console.log("View clicked")}
                />
                <DocumentList
                    showIcons
                    documentName="Commercial Invoices"
                    onDownload={() => console.log("Download clicked")}
                    onView={() => console.log("View clicked")}
                />
            </div>
        </div>
    )
}