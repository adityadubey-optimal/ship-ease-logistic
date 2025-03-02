"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"

interface PackingListHeaderProps {
    buyer?: string
    brand?: string
    description?: string
    packedQuantity?: string
    cartonQuantity?: string
    netWeight?: string
    grossWeight?: string
    cartonCubic?: string
    purchaseOrder?: string
    shipByDate?: string
    mode?: string
    pol?: string
    pod?: string
    incoterms?: string
    onValueChange?: (field: string, value: string) => void
    styles?: {
        backgroundColor?: string
        textColor?: string
        inputBackground?: string
    }
}

export default function PackingListHeader({
    buyer = "",
    brand = "",
    description = "Men's Long Sleeve Shirt 100% Cotton",
    packedQuantity = "8,000 PCS",
    cartonQuantity = "400",
    netWeight = "----- KG",
    grossWeight = "------KG",
    cartonCubic = "10.000 CBM",
    purchaseOrder = "2846395275",
    shipByDate = "4 Mar 25",
    mode = "Sea",
    pol = "CN-SHA",
    pod = "AU-MEL",
    incoterms = "FOB",
    onValueChange,
    styles = {},
}: PackingListHeaderProps) {
    const { theme } = useTheme()
    const fontSize = useResponsiveSize(14, 16)
    const labelSize = useResponsiveSize(14, 16)

    const { backgroundColor = "#E2E2FC", textColor = "#1E1E1E", inputBackground = "#E2E2FC" } = styles

    const [values, setValues] = useState({
        buyer,
        brand,
        description,
        packedQuantity,
        cartonQuantity,
        netWeight,
        grossWeight,
        cartonCubic,
    })

    const handleChange = (field: string, value: string) => {
        setValues((prev) => ({ ...prev, [field]: value }))
        onValueChange?.(field, value)
    }

    const renderInput = (field: string, value: string, width = "200px") => (
        <Input
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            className="border-none focus:ring-0"
            style={{
                backgroundColor: inputBackground,
                color: textColor,
                fontSize: `${fontSize}px`,
                width,
                padding: "4px 8px",
            }}
        />
    )

    const renderLabel = (text: string) => (
        <span
            style={{
                fontSize: `${labelSize}px`,
                color: textColor,
                fontWeight: "500",
            }}
        >
            {text}:
        </span>
    )

    const renderValue = (text: string) => (
        <span
            style={{
                fontSize: `${fontSize}px`,
                color: textColor,
                fontWeight: "600",
            }}
        >
            {text}
        </span>
    )

    return (
        <div
            style={{
                backgroundColor,
                padding: "24px",
                borderRadius: "16px",
                color: textColor,
            }}
        >
            <h1
                style={{
                    fontSize: `${useResponsiveSize(24, 32)}px`,
                    fontWeight: "700",
                    marginBottom: "24px",
                }}
            >
                Detailed Packing List
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        {renderLabel("Buyer")}
                        {renderInput("buyer", values.buyer)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Brand")}
                        {renderInput("brand", values.brand)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Description")}
                        {renderInput("description", values.description, "300px")}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Packed Quantity")}
                        {renderInput("packedQuantity", values.packedQuantity)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Carton Quantity")}
                        {renderInput("cartonQuantity", values.cartonQuantity)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Net Weight")}
                        {renderInput("netWeight", values.netWeight)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Gross Weight")}
                        {renderInput("grossWeight", values.grossWeight)}
                    </div>

                    <div className="flex items-center gap-4">
                        {renderLabel("Carton Cubic")}
                        {renderInput("cartonCubic", values.cartonCubic)}
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        {renderLabel("Purchase Order")}
                        {renderValue(purchaseOrder)}
                    </div>

                    <div className="flex justify-between items-center">
                        {renderLabel("Ship-by-Date")}
                        {renderValue(shipByDate)}
                    </div>

                    <div className="flex justify-between items-center">
                        {renderLabel("Mode")}
                        {renderValue(mode)}
                    </div>

                    <div className="flex justify-between items-center">
                        {renderLabel("POL")}
                        {renderValue(pol)}
                    </div>

                    <div className="flex justify-between items-center">
                        {renderLabel("POD")}
                        {renderValue(pod)}
                    </div>

                    <div className="flex justify-between items-center">
                        {renderLabel("Incoterms")}
                        {renderValue(incoterms)}
                    </div>
                </div>
            </div>
        </div>
    )
}

