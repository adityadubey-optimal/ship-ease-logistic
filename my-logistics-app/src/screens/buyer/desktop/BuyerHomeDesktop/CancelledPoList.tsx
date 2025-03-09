"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useNavigate } from "react-router-dom"
interface POTableStyles {
    header?: {
        backgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
    }
    row?: {
        backgroundColor?: string
        alternateBackgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
    }
    status?: {
        cancelled?: {
            color?: string
            backgroundColor?: string
        }
        rejected?: {
            color?: string
            backgroundColor?: string
        }
    }
    button?: {
        backgroundColor?: string
        textColor?: string
        fontSize?: string
        fontWeight?: string
        padding?: string
    }
}

interface POTableRow {
    id: string
    poNumber: string
    vendor: string
    status: "Cancelled" | "Rejected" | "Approved"
    comments: string
}

interface POTableProps {
    data: POTableRow[] | any
    styles?: POTableStyles
    onRowSelect?: (selectedIds: string[]) => void
    onGoToPO?: (poNumber: string) => void
    showTotals?: boolean
    totalsData?: Partial<POTableRow>
}

function POTable({ data, styles = {}, onRowSelect, onGoToPO, showTotals = false, totalsData }: POTableProps) {
    const { theme } = useTheme()
    const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

    // Responsive font sizes
    const responsiveHeaderFontSize = useResponsiveSize(16, 18) + "px" // e.g. 16px on mobile, 18px on desktop
    const responsiveRowFontSize = useResponsiveSize(14, 16) + "px"    // e.g. 14px on mobile, 16px on desktop

    // Default styles merged with passed-in styles
    const defaultStyles: POTableStyles = {
        header: {
            backgroundColor: "#E2E2FC",
            textColor: "#1E1E1E",
            fontSize: responsiveHeaderFontSize,
            fontWeight: "600",
        },
        row: {
            backgroundColor: "white",
            alternateBackgroundColor: "#F3F4F6",
            textColor: "#1E1E1E",
            fontSize: responsiveRowFontSize,
            fontWeight: "400",
        },
        status: {
            cancelled: {
                color: "#EF4444",
                backgroundColor: "#FEE2E2",
            },
            rejected: {
                color: "#F59E0B",
                backgroundColor: "#FEF3C7",
            },
        },
        button: {
            backgroundColor: "#1D4ED8",
            textColor: "white",
            fontSize: "14px",
            fontWeight: "500",
            padding: '5px',
        },
    }
    const mergedStyles: POTableStyles = {
        header: { ...defaultStyles.header, ...styles.header },
        row: { ...defaultStyles.row, ...styles.row },
        status: { ...defaultStyles.status, ...styles.status },
        button: { ...defaultStyles.button, ...styles.button },
    }

    const tableRef = useRef<HTMLDivElement>(null)

    const handleSelectAll = (checked: boolean) => {
        const newSelected = checked ? new Set(data.map((row: any) => row.id)) : new Set<string>()
        setSelectedRows(newSelected as Set<string>)
        onRowSelect?.(Array.from(newSelected as Set<string>))
    }

    const handleSelectRow = (id: string) => {
        const newSelected = new Set(selectedRows)
        newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id)
        setSelectedRows(newSelected)
        onRowSelect?.(Array.from(newSelected))
    }

    const getStatusStyle = (status: string) => {
        switch (status.toLowerCase()) {
            case "cancelled":
                return {
                    color: mergedStyles.status?.cancelled?.color,
                    backgroundColor: mergedStyles.status?.cancelled?.backgroundColor,
                }
            case "rejected":
                return {
                    color: mergedStyles.status?.rejected?.color,
                    backgroundColor: mergedStyles.status?.rejected?.backgroundColor,
                }
            default:
                return {}
        }
    }

    // Render header column groups
    const renderColumnGroup = (columnGroup: { header: string; accessor: string; width?: string; align?: string }[], isFixed = false, position: "left" | "right" = "left") => (
        <>
            {columnGroup.map((column, index) => (
                <th
                    key={index}
                    className={
                        "p-3 text-left font-semibold whitespace-nowrap " +
                        (column.align === "center" ? "text-center " : "") +
                        (column.align === "right" ? "text-right " : "") +
                        (isFixed ? "sticky bg-white z-10 " : "") +
                        (isFixed && position === "left" ? "left-0 " : "") +
                        (isFixed && position === "right" ? "right-0 " : "")
                    }
                    style={{
                        width: column.width,
                        fontSize: mergedStyles.header?.fontSize,
                        fontWeight: mergedStyles.header?.fontWeight,
                        color: mergedStyles.header?.textColor,
                        backgroundColor: isFixed ? theme.colors.thertiary : undefined,
                        ...(isFixed && position === "left" && { left: `40px` }),
                        ...(isFixed && position === "right" && { right: "0px" }),
                    }}
                >
                    {column.header}
                </th>
            ))}
        </>
    )

    return (
        <div className="overflow-auto" style={{ maxHeight: "400px", width: "100%", fontSize: responsiveRowFontSize, fontWeight: "400", borderRadius: "15px", boxShadow: "0px 18px 27px rgba(0, 0, 0, 0.15)" }} ref={tableRef}>
            <table className="w-full border-collapse">
                <thead style={{ backgroundColor: mergedStyles.header?.backgroundColor, fontSize: mergedStyles.header?.fontSize, fontWeight: mergedStyles.header?.fontWeight, color: mergedStyles.header?.textColor }}>
                    <tr>
                        <th className="p-4 sticky left-0 z-30" style={{ width: "40px", backgroundColor: mergedStyles.header?.backgroundColor }}>
                            <input
                                type="checkbox"
                                checked={selectedRows.size === data.length}
                                onChange={(e) => handleSelectAll(e.target.checked)}
                                className="rounded border-gray-300"
                                style={{ width: mergedStyles.header?.fontSize, height: mergedStyles.header?.fontSize }}
                            />
                        </th>
                        {["PO#", "Vendor", "Status", "Comments", ""].map((header) => (
                            <th
                                key={header}
                                className="p-4 text-left"
                                style={{
                                    color: mergedStyles.header?.textColor,
                                    fontSize: mergedStyles.header?.fontSize,
                                    fontWeight: mergedStyles.header?.fontWeight,
                                }}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: any, rowIndex: any) => {
                        const isSelected = selectedRows.has(row.id)
                        const rowBgColor =
                            isSelected
                                ? "rgb(239,246,255)"
                                : rowIndex % 2 === 0
                                    ? mergedStyles.row?.backgroundColor
                                    : mergedStyles.row?.alternateBackgroundColor

                        return (
                            <tr key={row.id} style={{ backgroundColor: rowBgColor }} className={isSelected ? "bg-blue-50" : ""}>
                                <td className="p-4 sticky left-0 z-10" style={{ width: "40px", backgroundColor: rowBgColor }}>
                                    <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleSelectRow(row.id)}
                                        className="rounded border-gray-300"
                                        style={{ width: mergedStyles.row?.fontSize, height: mergedStyles.row?.fontSize }}
                                    />
                                </td>
                                <td className="p-4" style={{ color: mergedStyles.row?.textColor, fontSize: mergedStyles.row?.fontSize, fontWeight: mergedStyles.row?.fontWeight }}>
                                    {row.poNumber}
                                </td>
                                <td className="p-4" style={{ color: mergedStyles.row?.textColor, fontSize: mergedStyles.row?.fontSize, fontWeight: mergedStyles.row?.fontWeight }}>
                                    {row.vendor}
                                </td>
                                <td className="p-4">
                                    <span
                                        className="px-3 py-1 rounded-full inline-block"
                                        style={{
                                            ...getStatusStyle(row.status),
                                            fontSize: mergedStyles.row?.fontSize,
                                            fontWeight: mergedStyles.row?.fontWeight,
                                        }}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="p-4" style={{ color: mergedStyles.row?.textColor, fontSize: mergedStyles.row?.fontSize, fontWeight: mergedStyles.row?.fontWeight }}>
                                    {row.comments}
                                </td>
                                <td className="p-4">
                                    <Button
                                        onClick={() => onGoToPO?.(row.poNumber)}
                                        className="rounded-full px-10 py-2"
                                        style={{
                                            backgroundColor: mergedStyles.button?.backgroundColor,
                                            color: mergedStyles.button?.textColor,
                                            fontSize: mergedStyles.button?.fontSize,
                                            fontWeight: mergedStyles.button?.fontWeight,

                                        }}
                                    >
                                        Go to PO
                                    </Button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}


const tableData = [
    {
        id: "1",
        poNumber: "2846395275",
        vendor: "Orient Craft",
        status: "Cancelled", // Must be one of the three literal types
        comments: "Failed to Receive",
    },
    {
        id: "2",
        poNumber: "2846395276",
        vendor: "XYZ Industries",
        status: "Rejected",
        comments: "Shipment Delay",
    },
    // ... more rows
]

const totals = {
    poNumber: "Total",
    vendor: "", // Leave blank if not applicable
    status: "", // Or use a summary like "–"
    comments: "", // You can compute a summary if needed
}

export default function SomePage() {
    const navigate = useNavigate()

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cancelled PO Table</h1>
            <POTable
                data={tableData}
                showTotals={true}
                //   totalsData={totals}
                onRowSelect={(selectedIds) => console.log("Selected rows:", selectedIds)}
                onGoToPO={(poNumber) => {
                    console.log("Navigate to PO:", poNumber)

                    navigate('/buyer/poDetails/234234')
                }}
                styles={{
                    header: {
                        backgroundColor: "#E2E2FC",
                        textColor: "#1E1E1E",
                        fontSize: "14px",
                        fontWeight: "600",
                    },
                    row: {
                        backgroundColor: "white",
                        alternateBackgroundColor: "#F3F4F6",
                        textColor: "#1E1E1E",
                        fontSize: "14px",
                        fontWeight: "400",
                    },
                    status: {
                        cancelled: {
                            color: "#EF4444",
                            backgroundColor: "#FEE2E2",
                        },
                        rejected: {
                            color: "#F59E0B",
                            backgroundColor: "#FEF3C7",
                        },
                    },
                    button: {
                        backgroundColor: "#1D4ED8",
                        textColor: "white",
                        fontSize: "14px",
                        fontWeight: "500",
                    },
                }}
            />
        </div>
    )
}