"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
    const fontSize = 13
    const labelSize = 13
    const color = "Navy"

    const colors: string[] = ["Navy", "Black", "White", "Red"]

    const { backgroundColor = "#E2E2FC", textColor = "#1E1E1E", inputBackground = theme.colors.guageheaderColor } = styles
    const [selectedColor, setSelectedColor] = useState(color)

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
                width: '140px',
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
                    fontSize: `16px`,
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


            </div>
            <div>
                <label className="text-sm font-medium" style={{ color: textColor, fontSize: '12px' }}>
                    Select Color
                </label>
                <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger
                        style={{
                            width: "100%",
                            backgroundColor: "#C4CDFF",
                            color: textColor,
                            padding: "1rem 16px",
                            borderRadius: "9999px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            cursor: "pointer",
                            fontSize: '13px',
                            fontWeight: '600',
                            height: '30px'

                        }}
                    >
                        <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                        {colors.map((c) => (
                            <SelectItem key={c} value={c}>
                                {c}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

