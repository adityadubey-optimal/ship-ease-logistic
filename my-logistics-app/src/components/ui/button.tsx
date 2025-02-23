import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { useTheme } from "../../context/ThemeContext"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "",
        approve: "",
        reject: "",
        icon: "",
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
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const { theme } = useTheme()

    const getVariantStyles = (variant: "primary" | "approve" | "reject" | "icon" | null | undefined) => {
      switch (variant) {
        case "primary":
          return {
            backgroundColor: theme.colors.primary,
            color: "white",
          }
        case "approve":
          return {
            backgroundColor: theme.colors.success,
            color: "white",
          }
        case "reject":
          return {
            backgroundColor: theme.colors.error,
            color: "white",
          }
        case "icon":
          return {
            backgroundColor: "transparent",
            color: theme.colors.textPrimary,
          }
        default:
          return {}
      }
    }

    const getSizeStyles = (size: "mobile" | "desktop" | null | undefined) => {
      switch (size) {
        case "mobile":
          return {
            padding: `${theme.statusCardStyles.padding.mobile} ${Number.parseInt(theme.statusCardStyles.padding.mobile) * 1.5}px`,
            fontSize: theme.fonts.mobile.body.size,
            fontWeight: theme.fonts.mobile.body.weight,
          }
        case "desktop":
        default:
          return {
            padding: `${theme.statusCardStyles.padding.desktop} ${Number.parseInt(theme.statusCardStyles.padding.desktop) * 1.5}px`,
            fontSize: theme.fonts.web.body.size,
            fontWeight: theme.fonts.web.body.weight,
          }
      }
    }

    const variantStyles = getVariantStyles(variant)
    const sizeStyles = getSizeStyles(size)

    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        style={{
          ...variantStyles,
          ...sizeStyles,
          fontFamily: theme.fonts.family,
        }}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

