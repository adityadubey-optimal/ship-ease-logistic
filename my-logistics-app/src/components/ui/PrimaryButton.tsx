"use client"

import * as React from "react"
import { Eye, EyeOff } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext' // Adjust the import path as needed

interface GenericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    setValue?: (value: string) => void
    icon?: React.ComponentType<any>
    onIconClick?: () => void
    errorMessage?: string
    successMessage?: string
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
    const [value, setValueInternal] = React.useState("")
    const id = React.useId()
    const { theme } = useTheme()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValueInternal(newValue)
        setValue?.(newValue)
    }

    const inputStyle: React.CSSProperties = {
        width: '100%',
        height: '3.5rem',
        padding: '0 1rem',
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: '0.75rem',
        fontSize: theme.fonts.web.body.size,
        fontWeight: theme.fonts.web.body.weight,
        backgroundColor: 'white',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    }

    const labelStyle: React.CSSProperties = {
        fontSize: theme.fonts.web.secondaryHeading.size,
        fontWeight: theme.fonts.web.secondaryHeading.weight,
        color: theme.colors.textPrimary,
        marginBottom: '0.5rem',
        display: 'block',
    }

    const messageStyle: React.CSSProperties = {
        fontSize: theme.fonts.web.notification.size,
        fontWeight: theme.fonts.web.notification.weight,
        marginTop: '0.25rem',
    }

    return (
        <div style={{ marginBottom: '1rem' }}>
            {label && <label htmlFor={id} style={labelStyle}>{label}</label>}
            <div style={{ position: 'relative' }}>
                <input
                    id={id}
                    value={value}
                    onChange={handleChange}
                    style={inputStyle}
                    {...props}
                />
                {IconComponent && (
                    <button
                        type="button"
                        onClick={onIconClick}
                        style={{
                            position: 'absolute',
                            right: '1rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <IconComponent style={{ color: theme.colors.textSecondary }} />
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