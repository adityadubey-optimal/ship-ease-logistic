"use client"

import React from "react"
import { Eye, ChevronDown } from "lucide-react"
import { Button } from "./button"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useIsMobile } from "@/hooks/useMobile"


export const styles = {
    fonts: {
        sizes: {
            label: "16px",
            input: "14px",
            placeholder: "14px",
            button: "16px",
            helperText: "12px",
            poNumber: "20px",
        },
        weights: {
            label: 500,
            input: 400,
            placeholder: 400,
            button: 500,
            helperText: 400,
            poNumber: 600,
        },
    },
    colors: {
        primary: "#2563EB",
        error: "#FF4D4F",
        inputBorder: "#E2E8F0",
        inputBackground: "#FFFFFF",
        inputText: "#1A202C",
        placeholderText: "#94A3B8",
        labelText: "#1A202C",
        buttonText: "#FFFFFF",
    },
    spacing: {
        inputPadding: "12px 16px",
        buttonPadding: "12px 24px",
        formGap: "24px",
    },
    sizes: {
        inputHeight: "44px",
        buttonHeight: "44px",
        formWidth: "100%",
        maxFormWidth: "800px",
    },
    borderRadius: {
        input: "8px",
        button: "8px",
        container: "16px",
    },
}



interface SSCCLabelFormProps {
    poNumber: string
    onGenerate: (data: FormData) => void
    onCancel: () => void
}

interface FormData {
    shipTo: string
    shipFrom: string
    asn: string
    shipMode: string
    totalWeight: string
    numberOfCartons: string
    barcodeUrl: string
}

export function SSCCLabelForm({ poNumber, onGenerate, onCancel }: SSCCLabelFormProps) {
    const isMobile = useIsMobile()
    const [formData, setFormData] = React.useState<FormData>({
        shipTo: "",
        shipFrom: "",
        asn: "",
        shipMode: "",
        totalWeight: "",
        numberOfCartons: "",
        barcodeUrl: "",
    })

    const containerStyle = {
        width: styles.sizes.formWidth,

        padding: "32px",
        backgroundColor: styles.colors.inputBackground,
        borderRadius: styles.borderRadius.container,
        boxShadow: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column" as const,
        gap: styles.spacing.formGap,
    }

    const labelStyle = {
        fontSize: `${useResponsiveSize(0.85, 1.125)}rem`,
        fontWeight: 650,
        color: styles.colors.labelText,
        marginBottom: "8px",
    }

    const inputStyle = {
        width: "100%",
        height: `${useResponsiveSize(45, 70)}px`,
        padding: styles.spacing.inputPadding,
        fontSize: styles.fonts.sizes.input,
        fontWeight: styles.fonts.weights.input,
        color: styles.colors.inputText,
        backgroundColor: styles.colors.inputBackground,
        border: `1px solid ${styles.colors.inputBorder}`,
        borderRadius: '15px',
        outline: "none",
    }

    const inputContainerStyle = {
        position: "relative" as const,
    }

    const iconStyle = {
        position: "absolute" as const,
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        color: styles.colors.placeholderText,
        cursor: "pointer",
    }

    const buttonContainerStyle = {
        display: "flex",
        gap: "16px",
        marginTop: "32px",
    }

    const buttonBaseStyle = {
        flex: 1,
        height: styles.sizes.buttonHeight,
        padding: styles.spacing.buttonPadding,
        fontSize: styles.fonts.sizes.button,
        fontWeight: styles.fonts.weights.button,
        color: styles.colors.buttonText,
        border: "none",
        borderRadius: '25px',
        cursor: "pointer",
    }

    const buttonMobileStlye = {
        flex: 1,
        height: styles.sizes.buttonHeight,
        padding: styles.spacing.buttonPadding,
        fontSize: styles.fonts.sizes.button,
        fontWeight: styles.fonts.weights.button,
        color: styles.colors.buttonText,
        border: "none",
        borderRadius: '25px',
        cursor: "pointer",
    }

    const generateButtonStyle = {
        ...buttonBaseStyle,
        backgroundColor: styles.colors.primary,
    }

    const cancelButtonStyle = {
        ...buttonBaseStyle,
        backgroundColor: styles.colors.error,
    }

    const helperTextStyle = {
        fontSize: styles.fonts.sizes.helperText,
        fontWeight: styles.fonts.weights.helperText,
        color: styles.colors.placeholderText,
        textAlign: "center" as const,
        marginTop: "16px",
    }

    const poNumberStyle = {
        fontSize: styles.fonts.sizes.poNumber,
        fontWeight: styles.fonts.weights.poNumber,
        color: styles.colors.inputText,
        marginBottom: "32px",
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onGenerate(formData)
    }

    return (
        <div style={containerStyle}>
            <div style={poNumberStyle}>PO {poNumber}</div>

            <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                    <label style={labelStyle}>Ship to-</label>
                    <input
                        style={inputStyle}
                        placeholder="Enter full address (can be generated from the portal)"
                        value={formData.shipTo}
                        onChange={(e) => setFormData({ ...formData, shipTo: e.target.value })}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Ship From</label>
                    <input
                        style={inputStyle}
                        placeholder="Enter fill address (can be generated from the portal)"
                        value={formData.shipFrom}
                        onChange={(e) => setFormData({ ...formData, shipFrom: e.target.value })}
                    />
                </div>

                <div>
                    <label style={labelStyle}>ASN#</label>
                    <div style={inputContainerStyle}>
                        <input
                            style={inputStyle}
                            placeholder="Enter ASN#"
                            value={formData.asn}
                            onChange={(e) => setFormData({ ...formData, asn: e.target.value })}
                        />
                        <Eye style={iconStyle} size={20} />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Select the ship mode</label>
                    <div style={inputContainerStyle}>
                        <input
                            style={inputStyle}
                            placeholder="Select the ship mode (can be generated from the portal)"
                            value={formData.shipMode}
                            onChange={(e) => setFormData({ ...formData, shipMode: e.target.value })}
                        />
                        <ChevronDown style={iconStyle} size={20} />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Total Weight</label>
                    <input
                        style={inputStyle}
                        placeholder="Total weight for this shipment (can be generated from the detailed packing list)"
                        value={formData.totalWeight}
                        onChange={(e) => setFormData({ ...formData, totalWeight: e.target.value })}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Number of Cartons</label>
                    <input
                        style={inputStyle}
                        placeholder="Number of cartons in this shipment (can be generated from the detailed packing list)"
                        value={formData.numberOfCartons}
                        onChange={(e) => setFormData({ ...formData, numberOfCartons: e.target.value })}
                    />
                </div>

                <div>
                    <label style={labelStyle}>Barcode URL</label>
                    <input
                        style={inputStyle}
                        placeholder="Enter URL for barcode"
                        value={formData.barcodeUrl}
                        onChange={(e) => setFormData({ ...formData, barcodeUrl: e.target.value })}
                    />
                </div>

                <div style={isMobile ? {
                    display: "flex",
                    flexDirection: 'column',
                    gap: "7px",
                    marginTop: "32px",
                } : buttonContainerStyle}>
                    <Button type="submit" style={generateButtonStyle}>
                        Generate SSCC Label
                    </Button>
                    <Button type="button" style={cancelButtonStyle} onClick={onCancel}>
                        Cancel
                    </Button>
                </div>

                <p style={helperTextStyle}>Please check all information before printing the SSCC label</p>
            </form>
        </div>
    )
}

