

"use client"

import * as React from "react"
import { Eye, EyeOff } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useIsMobile } from "@/hooks/useMobile"

interface GenericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    setValue?: (value: string) => void
    icon?: React.ComponentType<any>
    onIconClick?: () => void
    errorMessage?: string
    successMessage?: string
    isMobile?: boolean // Add prop to determine mobile/desktop styling
}

export default function GenericInput({
    label,
    setValue,
    icon: IconComponent,
    onIconClick,
    errorMessage,
    successMessage,
    ...props
}: GenericInputProps) {

    const isMobile = useIsMobile()
    const [value, setValueInternal] = React.useState("")
    const id = React.useId()
    const { theme } = useTheme()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValueInternal(newValue)
        setValue?.(newValue)
    }

    // Base styles that are common between mobile and desktop
    const baseInputStyle: React.CSSProperties = {
        width: '100%',
        backgroundColor: 'white',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: theme.borderRadius.borderRadius,
    }

    // Mobile-specific input styles
    const mobileInputStyle: React.CSSProperties = {
        ...baseInputStyle,
        height: '3rem',
        padding: '0 2.5rem 0 1rem', // Extra right padding for icon
        fontSize: theme.fonts.mobile.authPage.inputFont.size,
        fontWeight: theme.fonts.mobile.authPage.inputFont.weight,
    }

    // Desktop-specific input styles
    const desktopInputStyle: React.CSSProperties = {
        ...baseInputStyle,
        height: '3.5rem',
        padding: '0 3rem 0 1.25rem', // Extra right padding for icon
        fontSize: theme.fonts.web.authPage.inputFont.size,
        fontWeight: theme.fonts.web.authPage.inputFont.weight,
    }

    // Label styles based on device type
    const labelStyle: React.CSSProperties = {
        display: 'block',
        marginBottom: '0.5rem',
        color: theme.colors.textPrimary,

        ...(isMobile ? {
            fontSize: theme.fonts.mobile.authPage.label.size,
            fontWeight: theme.fonts.mobile.authPage.label.weight,
        } : {
            fontSize: theme.fonts.web.authPage.label.size,
            fontWeight: theme.fonts.web.authPage.label.weight,
        }),
    }

    // Message styles based on device type
    const messageStyle: React.CSSProperties = {
        marginTop: '0.25rem',
        ...(isMobile ? {
            fontSize: theme.fonts.mobile.notification.size,
            fontWeight: theme.fonts.mobile.notification.weight,
        } : {
            fontSize: theme.fonts.web.notification.size,
            fontWeight: theme.fonts.web.notification.weight,
        }),
    }

    // Icon button styles based on device type
    const iconButtonStyle: React.CSSProperties = {
        position: 'absolute',
        right: '1rem',
        top: '50%',
        transform: 'translateY(-35%)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: isMobile ? '0.5rem' : '0.75rem', // Larger touch target on mobile
        margin: '-0.5rem', // Negative margin to maintain positioning
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const iconStyle: React.CSSProperties = {
        color: theme.colors.textSecondary,
        width: isMobile ? '20px' : '24px',
        height: isMobile ? '20px' : '24px',
    }

    // Container style with appropriate spacing
    const containerStyle: React.CSSProperties = {
        marginBottom: isMobile ? '0.5rem' : '1rem'
    }

    return (
        <div style={containerStyle}>
            {label && <label htmlFor={id} style={labelStyle}>{label}</label>}
            <div style={{ position: 'relative' }}>
                <input
                    id={id}
                    value={value}
                    onChange={handleChange}
                    style={isMobile ? mobileInputStyle : desktopInputStyle}
                    {...props}
                />
                {IconComponent && (
                    <button
                        type="button"
                        onClick={onIconClick}
                        style={iconButtonStyle}
                    >
                        <IconComponent style={iconStyle} />
                    </button>
                )}
            </div>
            {errorMessage && (
                <p style={{ ...messageStyle, color: theme.colors.error }}>{errorMessage}</p>
            )}
            {successMessage && (
                <p style={{ ...messageStyle, color: theme.colors.success }}>{successMessage}</p>
            )}
        </div>
    )
}