"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"
import { ChevronDown } from "lucide-react"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 font-sans",
    {
        variants: {
            variant: {
                primary: "",
                approve: "",
                reject: "",
                icon: "",
                selectAction: "",
            },
            size: {
                mobile: "",
                desktop: "",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "desktop",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
    /** If true, appends a ChevronDown icon to the right. Useful for dropdown triggers. */
    showChevron?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, showChevron = false, children, ...props }, ref) => {
        const { theme } = useTheme()

        const getVariantStyles = (
            variant: "primary" | "approve" | "reject" | "icon" | "selectAction" | null | undefined
        ) => {
            switch (variant) {
                case "primary":
                    return {
                        backgroundColor: theme?.colors?.primary ?? "#4318FF",
                        color: "#FFF",
                    }
                case "approve":
                    return {
                        backgroundColor: theme?.colors?.success ?? "#22C55E",
                        color: "#FFF",
                    }
                case "reject":
                    return {
                        backgroundColor: theme?.colors?.error ?? "#EF4444",
                        color: "#FFF",
                    }
                case "icon":
                    return {
                        backgroundColor: "transparent",
                        color: theme?.colors?.textPrimary ?? "#000",
                    }
                case "selectAction":
                    // Gray background with black text, matching the screenshot
                    return {
                        backgroundColor: "#D1D1D1", // or "#E2E2E2" if you prefer
                        color: "#000",
                    }
                default:
                    return {}
            }
        }

        const getSizeStyles = (size: "mobile" | "desktop" | null | undefined) => {
            switch (size) {
                case "mobile":
                    return {
                        padding: "0.25rem 0.75rem",
                        fontSize: "0.875rem", // 14px
                        fontWeight: 400,
                    }
                case "desktop":
                default:
                    return {
                        padding: "0.5rem 1rem",
                        fontSize: "1rem", // 16px
                        fontWeight: 500,
                    }
            }
        }

        const variantStyles = getVariantStyles(variant)
        const sizeStyles = getSizeStyles(size)

        const Comp = asChild ? Slot : "button"

        return (
            <Comp
                ref={ref}
                className={cn(buttonVariants({ variant, size, className }))}
                style={{
                    ...variantStyles,
                    ...sizeStyles,
                    fontFamily: theme?.fonts?.family ?? "sans-serif",
                    borderRadius: "8px", // match the rounded corners from your screenshot
                }}
                {...props}
            >
                {children}
                {showChevron && (
                    <ChevronDown className="ml-2 h-4 w-4" />
                )}
            </Comp>
        )
    }
)
Button.displayName = "Button"