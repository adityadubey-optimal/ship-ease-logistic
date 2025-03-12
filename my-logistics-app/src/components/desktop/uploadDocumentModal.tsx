"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// or wherever you import your Shadcn dialog from
import { Button } from "@/components/ui/button"
import React from "react"
import DocumentList from "./DocumentationListUpload"

import { ThemedSonnerToaster } from "@/components/ui/toasterComponent"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useIsMobile } from "@/hooks/useMobile"

interface DocumentsDialogExampleProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}



export function DocumentsDialogExample({ open, setOpen }: DocumentsDialogExampleProps) {
    const { theme } = useTheme()
    const isMobile = useIsMobile()
    return isMobile ? (
        <>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="w-[90%] h-[90%] overflow-auto"
                    style={{
                        backgroundColor: theme.colors.thertiary,
                        borderRadius: 25,
                        zIndex: 9999999999999999999,
                        padding: '1rem 0rem 0rem 0rem',
                        height: 'fit-content'

                    }}
                >
                    {/* You can add a top bar or anything you wish */}
                    <DialogHeader>
                        <span style={{ fontSize: `${useResponsiveSize(1.05, 1.25)}`, fontWeight: 650 }}>PO 234234234</span>
                    </DialogHeader>

                    <div className="my-4" style={{ background: theme.colors.thertiary, padding: '1rem' }}>

                        <DocumentList />
                    </div>


                </DialogContent>
            </Dialog>

            {/* Place your ThemedToaster at root level so the toasts can appear */}
            <ThemedSonnerToaster toastBgColor="#333" toastTextColor="#fff" position="top-right" />
        </>
    )
        : (
            <>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent
                        className="w-[90%] h-[90%] overflow-auto"
                        style={{
                            backgroundColor: theme.colors.thertiary,
                            borderRadius: 25,
                            zIndex: 9999999999999999999,
                        }}
                    >
                        {/* You can add a top bar or anything you wish */}
                        <DialogHeader>
                            <span style={{ fontSize: `${useResponsiveSize(1.05, 1.25)}`, fontWeight: 650 }}>PO 234234234</span>
                        </DialogHeader>

                        <div className="my-4" style={{ background: theme.colors.thertiary, padding: '1rem' }}>

                            <DocumentList />
                        </div>


                    </DialogContent>
                </Dialog>

                {/* Place your ThemedToaster at root level so the toasts can appear */}
                <ThemedSonnerToaster toastBgColor="whote" toastTextColor="black" position="top-right" />
            </>
        )
}