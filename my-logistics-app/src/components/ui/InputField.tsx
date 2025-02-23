// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"
// import type { LucideIcon } from "lucide-react"

// interface GenericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//     // Label and placeholder
//     label?: string
//     placeholder?: string

//     // Value control
//     value?: string
//     setValue?: (value: string) => void

//     // Icon configuration
//     icon?: LucideIcon
//     onIconClick?: () => void
//     iconPosition?: "left" | "right"

//     // Message states
//     errorMessage?: string
//     successMessage?: string
//     warningMessage?: string

//     // Additional styling
//     className?: string
//     inputClassName?: string
//     labelClassName?: string
// }

// export default function GenericInput({
//     // Label and placeholder
//     label,
//     placeholder,

//     // Value control
//     value: externalValue,
//     setValue: setExternalValue,

//     // Icon configuration
//     icon: Icon,
//     onIconClick,
//     iconPosition = "right",

//     // Message states
//     errorMessage,
//     successMessage,
//     warningMessage,

//     // Additional styling
//     className,
//     inputClassName,
//     labelClassName,

//     // Rest of input props
//     ...props
// }: GenericInputProps) {
//     // Internal state for uncontrolled usage
//     const [internalValue, setInternalValue] = React.useState("")

//     // Determine if component is controlled
//     const isControlled = externalValue !== undefined
//     const value = isControlled ? externalValue : internalValue

//     // Generate unique ID for input-label association
//     const id = React.useId()

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newValue = e.target.value

//         // Update internal state if uncontrolled
//         if (!isControlled) {
//             setInternalValue(newValue)
//         }

//         // Call external setValue if provided
//         setExternalValue?.(newValue)
//     }

//     return (
//         <div className={cn("space-y-2", className)}>
//             {/* Label */}
//             {label && (
//                 <label htmlFor={id} className={cn("text-xl font-semibold text-gray-900", labelClassName)}>
//                     {label}
//                 </label>
//             )}

//             {/* Input Container */}
//             <div className="relative">
//                 <input
//                     {...props}
//                     id={id}
//                     value={value}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     className={cn(
//                         "h-14 w-full rounded-2xl border-2 bg-white px-4 text-base transition-colors",
//                         "focus:outline-none focus:ring-2 focus:ring-offset-2",
//                         {
//                             "border-red-200 focus:ring-red-200": errorMessage,
//                             "border-green-200 focus:ring-green-200": successMessage,
//                             "border-yellow-200 focus:ring-yellow-200": warningMessage,
//                             "border-[#e5e1ff] focus:ring-blue-200": !errorMessage && !successMessage && !warningMessage,
//                             "pr-12": Icon && iconPosition === "right",
//                             "pl-12": Icon && iconPosition === "left",
//                         },
//                         inputClassName,
//                     )}
//                 />

//                 {/* Icon */}
//                 {Icon && (
//                     <button
//                         type="button"
//                         onClick={onIconClick}
//                         className={cn("absolute top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700", {
//                             "right-4": iconPosition === "right",
//                             "left-4": iconPosition === "left",
//                         })}
//                     >
//                         <Icon className="h-5 w-5" />
//                         <span className="sr-only">Toggle input type</span>
//                     </button>
//                 )}
//             </div>

//             {/* Status Messages */}
//             {errorMessage && <p className="text-sm font-medium text-red-500">{errorMessage}</p>}
//             {successMessage && <p className="text-sm font-medium text-green-500">{successMessage}</p>}
//             {warningMessage && <p className="text-sm font-medium text-yellow-500">{warningMessage}</p>}
//         </div>
//     )
// }



// "use client";

// import * as React from "react";
// import styled from "styled-components";
// import { useTheme } from "@/context/ThemeContext";
// import type { LucideIcon } from "lucide-react";

// interface IconInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//     label?: string;
//     placeholder?: string;
//     value?: string;
//     setValue?: (value: string) => void;
//     icon?: LucideIcon;
//     onIconClick?: () => void;
//     iconPosition?: "left" | "right";
//     errorMessage?: string;
//     successMessage?: string;
//     warningMessage?: string;
//     className?: string;
//     inputClassName?: string;
//     labelClassName?: string;
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const StyledLabel = styled.label`
//   font-size: 1.25rem;
//   font-weight: 600;
//   color: ${({ theme }: any) => theme.colors.textPrimary || "#111827"};
//   margin-bottom: 0.5rem;
// `;

// const InputWrapper = styled.div`
//   position: relative;
// `;

// const StyledInput = styled.input<{ $hasError?: boolean; $hasSuccess?: boolean }>`
//   height: 3.5rem;
//   border-radius: 1rem;
//   border: 2px solid
//     ${(props) =>
//         props.$hasError ? props.theme.colors.error || "#fecaca" : props.$hasSuccess ? props.theme.colors.success || "#bbf7d0" : "#e5e1ff"};
//   background-color: white;
//   padding-left: 1rem;
//   padding-right: 3rem;
//   font-size: 1rem;

//   &:focus-visible {
//     outline: none;
//     border-color: ${(props) =>
//         props.$hasError ? props.theme.colors.error || "#fecaca" : props.$hasSuccess ? props.theme.colors.success || "#bbf7d0" : "#e5e1ff"};
//   }
// `;

// const IconWrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #6b7280;
//   pointer-events: none;
// `;

// const ToggleButton = styled.button`
//   position: absolute;
//   right: 1rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #6b7280;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   transition: color 0.2s;

//   &:hover {
//     color: #374151;
//   }
// `;

// const ErrorMessage = styled.p`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: ${({ theme }: any) => theme.colors.error || "#ef4444"};
// `;

// const SuccessMessage = styled.p`
//   font-size: 0.875rem;
//   font-weight: 500;
//   color: ${({ theme }: any) => theme.colors.success || "#22c55e"};
// `;

// export default function IconInput({
//     label,
//     placeholder,
//     value: externalValue,
//     setValue: setExternalValue,
//     icon: Icon,
//     onIconClick,
//     iconPosition = "right",
//     errorMessage,
//     successMessage,
//     warningMessage,
//     className,
//     inputClassName,
//     labelClassName,
//     ...props
// }: IconInputProps) {
//     const { theme } = useTheme();
//     const [internalValue, setInternalValue] = React.useState("");
//     const isControlled = externalValue !== undefined;
//     const value = isControlled ? externalValue : internalValue;
//     const id = React.useId();

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newValue = e.target.value;
//         if (!isControlled) {
//             setInternalValue(newValue);
//         }
//         setExternalValue?.(newValue);
//     };

//     const extraPaddingLeft = Icon && iconPosition === "left" ? "3rem" : "1rem";
//     const extraPaddingRight = Icon && iconPosition === "right" ? "3rem" : "1rem";

//     return (
//         <Container className={className}>
//             {label && <StyledLabel htmlFor={id} className={labelClassName}>{label}</StyledLabel>}
//             <InputWrapper>
//                 {Icon && iconPosition === "left" && (
//                     <IconWrapper style={{ left: "1rem" }}>{<Icon className="h-5 w-5" />}</IconWrapper>
//                 )}
//                 <StyledInput
//                     {...props}
//                     id={id}
//                     value={value}
//                     onChange={handleChange}
//                     placeholder={placeholder}
//                     $hasError={!!errorMessage}
//                     $hasSuccess={!!successMessage}
//                     style={{ paddingLeft: extraPaddingLeft, paddingRight: extraPaddingRight }}
//                     className={inputClassName}
//                 />
//                 {props.type === "password" && (
//                     <ToggleButton type="button" onClick={onIconClick}>
//                         {<Icon ? <Icon className="h-5 w-5" /> : null >}
//                         <span className="sr-only">Toggle input type</span>
//                     </ToggleButton>
//                 )}
//                 {Icon && iconPosition === "right" && props.type !== "password" && (
//                     <IconWrapper style={{ right: "1rem" }}>{<Icon className="h-5 w-5" />}</IconWrapper>
//                 )}
//             </InputWrapper>
//             {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
//             {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
//             {warningMessage && <p className="text-sm font-medium text-yellow-500">{warningMessage}</p>}
//         </Container>
//     );
// }


// "use client"

// import * as React from "react"
// import { Eye, EyeOff } from 'lucide-react'
// import { useTheme } from '../../context/ThemeContext' // Adjust the import path as needed

// interface GenericInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//     label?: string
//     setValue?: (value: string) => void
//     icon?: React.ComponentType<any>
//     onIconClick?: () => void
//     errorMessage?: string
//     successMessage?: string
// }

// export default function GenericInput({
//     label,
//     setValue,
//     icon: IconComponent,
//     onIconClick,
//     errorMessage,
//     successMessage,
//     ...props
// }: GenericInputProps) {
//     const [value, setValueInternal] = React.useState("")
//     const id = React.useId()
//     const { theme } = useTheme()

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const newValue = e.target.value
//         setValueInternal(newValue)
//         setValue?.(newValue)
//     }

//     const inputStyle: React.CSSProperties = {
//         width: '100%',
//         height: '3.5rem',
//         padding: '0 1rem',
//         border: `2px solid ${theme.colors.primary}`,
//         borderRadius: '0.75rem',
//         fontSize: theme.fonts.web.body.size,
//         fontWeight: theme.fonts.web.body.weight,
//         backgroundColor: 'white',
//         transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
//     }

//     const labelStyle: React.CSSProperties = {
//         fontSize: theme.fonts.web.secondaryHeading.size,
//         fontWeight: theme.fonts.web.secondaryHeading.weight,
//         color: theme.colors.textPrimary,
//         marginBottom: '0.5rem',
//         display: 'block',
//     }

//     const messageStyle: React.CSSProperties = {
//         fontSize: theme.fonts.web.notification.size,
//         fontWeight: theme.fonts.web.notification.weight,
//         marginTop: '0.25rem',
//     }

//     return (
//         <div style={{ marginBottom: '1rem' }}>
//             {label && <label htmlFor={id} style={labelStyle}>{label}</label>}
//             <div style={{ position: 'relative' }}>
//                 <input
//                     id={id}
//                     value={value}
//                     onChange={handleChange}
//                     style={inputStyle}
//                     {...props}
//                 />
//                 {IconComponent && (
//                     <button
//                         type="button"
//                         onClick={onIconClick}
//                         style={{
//                             position: 'absolute',
//                             right: '1rem',
//                             top: '50%',
//                             transform: 'translateY(-50%)',
//                             background: 'none',
//                             border: 'none',
//                             cursor: 'pointer',
//                         }}
//                     >
//                         <IconComponent style={{ color: theme.colors.textSecondary }} />
//                     </button>
//                 )}
//             </div>
//             {errorMessage && (
//                 <p style={{ ...messageStyle, color: theme.colors.error }}>{errorMessage}</p>
//             )}
//             {successMessage && (
//                 <p style={{ ...messageStyle, color: theme.colors.success }}>{successMessage}</p>
//             )}
//         </div>
//     )
// }


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
    }

    // Mobile-specific input styles
    const mobileInputStyle: React.CSSProperties = {
        ...baseInputStyle,
        height: '3rem',
        padding: '0 2.5rem 0 1rem', // Extra right padding for icon
        borderRadius: '1rem',
        fontSize: theme.fonts.mobile.body.size,
        fontWeight: theme.fonts.mobile.body.weight,
    }

    // Desktop-specific input styles
    const desktopInputStyle: React.CSSProperties = {
        ...baseInputStyle,
        height: '3.5rem',
        padding: '0 3rem 0 1.25rem', // Extra right padding for icon
        borderRadius: '0.75rem',
        fontSize: theme.fonts.web.body.size,
        fontWeight: theme.fonts.web.body.weight,
    }

    // Label styles based on device type
    const labelStyle: React.CSSProperties = {
        display: 'block',
        marginBottom: '0.5rem',
        color: theme.colors.textPrimary,
        ...(isMobile ? {
            fontSize: theme.fonts.mobile.secondaryHeading.size,
            fontWeight: theme.fonts.mobile.secondaryHeading.weight,
        } : {
            fontSize: theme.fonts.web.secondaryHeading.size,
            fontWeight: theme.fonts.web.secondaryHeading.weight,
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
        marginBottom: isMobile ? '1rem' : '1.5rem',
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