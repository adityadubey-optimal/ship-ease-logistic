"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// or wherever you import your Shadcn dialog from
import { Button } from "@/components/ui/button"
import React from "react"
import DocumentList from "./DocumentationListUpload"

import { ThemedSonnerToaster } from "@/components/ui/toasterComponent"
import { useTheme } from "@/context/ThemeContext"
import DocumentHeader from "@/components/desktop/sectionHeader"
import scanIcon from '@/assets/Scanning QR code.svg';
import { SSCCLabelForm } from "@/components/ui/CrearLabelForm"
import { toast } from "sonner"
interface DocumentsDialogExampleProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function renderLabelPreview({ setOpen, open }: DocumentsDialogExampleProps) {
    const { theme } = useTheme()
    const containerStyle: React.CSSProperties = {
        // backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: "1rem",
        // boxShadow: theme.baseShadows.cardWithSpread,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
    }

    const pdfStyle: React.CSSProperties = {
        width: "100%",
        height: "600px",
        border: "1px solid #ccc",
        borderRadius: 8,
    }

    const buttonContainerStyle: React.CSSProperties = {
        display: "flex",
        gap: "16px",
        marginTop: "1rem",
        width: '80%'
    }

    const buttonBaseStyle: React.CSSProperties = {
        flex: 1,
        height: "44px",
        borderRadius: 25,
        fontSize: "16px",
        fontWeight: 500,
        color: "#fff",
        cursor: "pointer",
        border: "none",
    }

    return (
        <div style={containerStyle}>
            {/* PO # at the top */}
            <h2 style={{ fontSize: "20px", fontWeight: 600 }}>PO 284639525</h2>

            {/* If you have a real PDF link, you could use <iframe> or <object> */}
            <iframe
                title="Label PDF Preview"
                src="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                style={pdfStyle}
            />

            <div style={buttonContainerStyle}>
                {/* "Send to Printer" button */}
                <Button
                    style={{
                        ...buttonBaseStyle,
                        backgroundColor: theme.colors.primary || "#16A34A",
                    }}
                    onClick={() => {
                        // Here you might call window.print() or a custom printing flow
                        console.log("Sending to printer...")
                        toast.success("Sent to printer!")
                    }}
                >
                    Send to Printer
                </Button>

                {/* "Cancel" button */}
                <Button
                    style={{
                        ...buttonBaseStyle,
                        backgroundColor: theme.colors.error || "#DC2626",
                    }}
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
            </div>
        </div>
    )
}




export function CreateLabelModalComponent({ open, setOpen }: DocumentsDialogExampleProps) {
    const { theme } = useTheme()

    const [showLabel, setShowLabel] = React.useState(false)
    return (
        <>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="sm:max-w-full w-[90%] h-[90%] overflow-auto"
                    style={{
                        backgroundColor: theme.colors.thertiary,
                        borderRadius: 25,
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    {/* You can add a top bar or anything you wish */}
                    <DialogHeader>
                        {showLabel ? <></> :
                            <DocumentHeader
                                Icon={<img src={scanIcon} alt="Ship illustration" className="w-10 h-10 object-contain" />}
                                title="Print Carton SSCC Label"
                                subtitle="Enter the information and send the label to print"
                                showSeeMore={false}
                                onSeeMoreClick={() => {
                                    console.log('See More clicked')

                                }}
                                containerStyle={{}}
                            />
                        }
                    </DialogHeader>

                    <div className="my-4" >
                        {showLabel ?
                            (renderLabelPreview({ open, setOpen }))
                            : (
                                <SSCCLabelForm
                                    poNumber="284639525"
                                    onGenerate={(data) => {

                                        console.log("Generate:", data)
                                        setShowLabel(true)
                                    }}
                                    onCancel={() => console.log("Cancelled")}
                                />
                            )}

                    </div>


                </DialogContent>
            </Dialog >

            {/* Place your ThemedToaster at root level so the toasts can appear */}
            < ThemedSonnerToaster toastBgColor="#333" toastTextColor="#fff" position="top-right" />
        </>
    )
}