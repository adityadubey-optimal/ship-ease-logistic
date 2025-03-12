"use client"

import * as React from "react"
import { Toaster } from "sonner"

interface ThemedSonnerToasterProps {
    toastBgColor?: string
    toastTextColor?: string
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
}

export function ThemedSonnerToaster({
    toastBgColor = "#333",
    toastTextColor = "#fff",
    position = "top-right",
}: ThemedSonnerToasterProps) {
    return (
        <Toaster
            position={position}
            toastOptions={{
                style: {
                    backgroundColor: toastBgColor,
                    color: toastTextColor,
                },
            }}
        />
    )
}