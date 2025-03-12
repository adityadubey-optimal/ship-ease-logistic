"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AdjustableHeightDialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    minHeight?: number
    maxHeight?: number
}

export function AdjustableHeightDialog({
    isOpen,
    onClose,
    title,
    children,
    minHeight = 200,
    maxHeight = 600,
}: AdjustableHeightDialogProps) {
    const [height, setHeight] = useState(400) // Default height
    const dialogRef = useRef<HTMLDivElement>(null)
    const resizeHandleRef = useRef<HTMLDivElement>(null)



    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent ref={dialogRef} style={{ height: `${height}px`, maxHeight: `${maxHeight}px`, overflow: "hidden" }}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div style={{ overflow: "auto", height: "calc(100% - 60px)" }}>{children}</div>
                <div
                    ref={resizeHandleRef}
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "10px",
                        cursor: "ns-resize",
                        backgroundColor: "transparent",
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}

