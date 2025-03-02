"use client"

import React, { useState, useRef, useEffect } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Check, X, Edit2, MoreVertical, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import { useIsMobile } from "@/hooks/useMobile"



function renderActionCell<T>(row: any, onApprove?: (row: any) => void, onReject?: (row: any) => void) {
    const isMobile = useIsMobile() // or your own logic to detect mobile
    // If row has a "status" of "approved", you might skip or show a badge
    const isApproved = (row as any).status === "approved"
    if (isApproved) {
        return (
            <div className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm inline-block">
                Approved
            </div>
        )
    }

    // Handle the item selection from dropdown
    function handleSelect(action: string) {
        if (action === "Approve") row.onApprove?.(row)
        if (action === "Reject") row.onReject?.(row)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="selectAction"
                    size="desktop"
                    className="w-[150px]" // or any custom width
                >
                    Select Action
                </Button>
                {/* {isMobile ? (
                    // On mobile: Three-dot icon button
                    <Button variant="icon" size="mobile" className="p-2">
                        <MoreVertical className="w-4 h-4" />
                    </Button>
                ) : (
                    // On desktop: "Select Action" button with down chevron
                    <Button variant="icon" size="desktop" className="flex items-center justify-between bg-gray-200 text-black w-[150px]">
                        Select Action
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                )} */}
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                style={{ width: isMobile ? "120px" : "150px" }}
                className="bg-gray-200 text-black border-none"
            >
                <DropdownMenuItem
                    onClick={() => handleSelect("Approve")}
                    className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                >
                    Approve
                </DropdownMenuItem>
                <DropdownMenuSeparator className="my-1 border-gray-400" />
                <DropdownMenuItem
                    onClick={() => handleSelect("Reject")}
                    className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                >
                    Reject
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


interface Column<T> {
    header: string
    accessor: keyof T | ((data: T) => React.ReactNode)
    width?: string
    align?: "left" | "center" | "right"
    renderCell?: (value: any, row: T) => React.ReactNode
    editable?: boolean
    type?: "text" | "number" | "boolean"

}

interface ScrollableDataTableProps<T> {
    columns: Column<T>[]
    data: T[],

    selectable?: boolean
    onSelectionChange?: (selectedRows: T[]) => void
    onApprove?: (row: T) => void
    onReject?: (row: T) => void
    showActions?: boolean
    getRowId?: (row: T) => string | number
    height?: string
    width?: string
    onRowChange?: (updatedRow: T) => void
    fixedColumns?: string[]
    showTotals?: boolean
    /** Optional object with summary values for columns in the totals row */
    totalsData?: Partial<T>
    tableStyles?: {
        headerFontSize?: string
        headerFontWeight?: string
        rowFontSize?: string
        rowFontWeight?: string
        svgSize?: string
        checkboxSize?: string
    }
    customEditComponent?: (value: any, row: T, column: Column<T>, onSave: (newValue: any) => void, onCancel: () => void) => React.ReactNode
}

export function ScrollableDataTable<T extends object>({
    columns,
    data,
    selectable = true,
    onSelectionChange,
    onApprove,
    onReject,
    showActions = true,
    getRowId = (row: any) => row.id,
    height = "400px",
    width = "100%",
    onRowChange,
    fixedColumns = ["id"],
    tableStyles = {},
    customEditComponent,
    showTotals = false,
    totalsData,
}: ScrollableDataTableProps<T>) {
    const responsiveHeaderFontSize = useResponsiveSize(18, 24) + "px"  // e.g. 18px on mobile to 24px on desktop
    const responsiveHeaderFontWeight = "600" // Using a fixed weight here, can adjust if needed.

    const responsiveRowFontSize = useResponsiveSize(14, 18) + "px"     // e.g. 14px on mobile to 18px on desktop
    const responsiveRowFontWeight = "400" // Fixed weight
    const { theme } = useTheme()
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set())
    const [editingCell, setEditingCell] = useState<{ rowId: string | number; accessor: keyof T } | null>(null)
    const [editValue, setEditValue] = useState<string>("")
    const tableRef = useRef<HTMLDivElement>(null)

    // Default styles
    const defaultStyles = {
        headerFontSize: theme.fonts.web.heading.size,
        headerFontWeight: theme.fonts.web.heading.weight,
        rowFontSize: theme.fonts.web.body.size,
        rowFontWeight: theme.fonts.web.body.weight,
        svgSize: "1rem",
        checkboxSize: "1rem",
    }

    // Merge default styles with provided styles
    const styles = { ...defaultStyles, ...tableStyles }

    // Separate columns into left fixed, scrollable, and right fixed
    const leftFixedColumns = columns.filter(
        (col) => fixedColumns.includes(col.accessor as string) && col.accessor !== "actions",
    )
    const rightFixedColumns = showActions ? [{ header: "Actions", accessor: "actions" as keyof T }] : []
    const scrollableColumns = columns.filter(
        (col) => !fixedColumns.includes(col.accessor as string) && col.accessor !== "actions",
    )

    // Calculate the width of fixed columns
    const getFixedColumnWidth = (columnGroup: Column<T>[]) =>
        columnGroup.reduce((total, col) => total + (Number.parseInt(col.width || "0") || 0), 0)



    // Ensure fixed columns are at the beginning or end
    useEffect(() => {
        const invalidFixedColumns = fixedColumns.filter(
            (col) => !columns.some((c) => c.accessor === col) && col !== "actions",
        )
        if (invalidFixedColumns.length > 0) {
            console.warn(`Invalid fixed columns: ${invalidFixedColumns.join(", ")}. These will be ignored.`)
        }
    }, [fixedColumns, columns])

    const handleSelectRow = (rowId: string | number) => {
        const newSelection = new Set(selectedRows)
        if (newSelection.has(rowId)) {
            newSelection.delete(rowId)
        } else {
            newSelection.add(rowId)
        }
        setSelectedRows(newSelection)
        onSelectionChange?.(data.filter((row) => newSelection.has(getRowId(row))))
    }

    const handleSelectAll = () => {
        if (selectedRows.size === data.length) {
            setSelectedRows(new Set())
            onSelectionChange?.([])
        } else {
            const newSelection = new Set(data.map((row) => getRowId(row)))
            setSelectedRows(newSelection)
            onSelectionChange?.(data)
        }
    }



    // Update renderCell function:
    const renderCell = (column: Column<T>, row: T) => {
        const rowId = getRowId(row)
        const value = typeof column.accessor === "function" ? column.accessor(row) : row[column.accessor as keyof T]

        // If a custom renderCell function is provided for this column, use it.
        if (column.renderCell) {
            return column.renderCell(value, row)
        }

        // Editable cells:
        if (column.editable) {
            // If this cell is in edit mode, render an input (or custom component)
            if (editingCell && editingCell.rowId === rowId && editingCell.accessor === column.accessor) {
                const onSave = (newValue: any) => {
                    // Save and exit edit mode
                    const updatedRow = { ...row, [column.accessor as keyof T]: newValue }
                    onRowChange?.(updatedRow)
                    setEditingCell(null)
                }
                const onCancel = () => setEditingCell(null)

                // If a custom edit component is provided, use it
                if (customEditComponent) {
                    return customEditComponent(value, row, column, onSave, onCancel)
                }

                // Otherwise, default to a simple input
                return (
                    <input
                        autoFocus
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => onSave(editValue)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") onSave(editValue)
                            if (e.key === "Escape") onCancel()
                        }}
                        style={{ fontSize: styles.rowFontSize, fontWeight: styles.rowFontWeight, width: "100%" }}
                    />
                )
            }
            else {
                // Render the cell value wrapped in a div with an onClick to enable editing.
                return (
                    <div
                        onClick={() => {
                            setEditingCell({ rowId, accessor: column.accessor as keyof T })
                            setEditValue(String(value))
                        }}
                        style={{ cursor: "pointer", fontSize: styles.rowFontSize, fontWeight: styles.rowFontWeight }}
                    >
                        {value as React.ReactNode}
                    </div>
                )
            }
        }

        // Non-editable cells: simply render the value.
        if (typeof value === "number" && column.header.toLowerCase().includes("variation")) {
            const percentage = value as number
            const percentageColor = percentage <= 3 ? theme.colors.success : theme.colors.error
            return <span style={{ color: percentageColor }}>{percentage}%</span>
        }

        return value as React.ReactNode
    }



    const renderColumnGroup = (columnGroup: Column<T>[], isFixed = false, position: "left" | "right" = "left") => (
        <React.Fragment>
            {columnGroup.map((column, index) => (
                <th
                    key={index}
                    className={cn(
                        "p-3 text-left font-semibold whitespace-nowrap",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right",
                        isFixed && "sticky bg-white z-10",
                        isFixed && position === "left" && "left-0",
                        isFixed && position === "right" && "right-0",
                    )}
                    style={{
                        width: column.width,
                        fontSize: styles.headerFontSize,
                        fontWeight: styles.headerFontWeight,
                        color: theme.colors.textPrimary,
                        backgroundColor: isFixed ? theme.colors.thertiary : undefined,
                        ...(isFixed && position === "left" && { left: `${selectable ? 40 : 0}px` }),
                        ...(isFixed && position === "right" && { right: "0px" }),
                    }}
                >
                    {column.header}
                </th>
            ))}
        </React.Fragment>
    )

    return (
        <div className="overflow-auto" style={{ height, width, fontSize: responsiveRowFontSize, fontWeight: responsiveRowFontWeight, borderRadius: "15px", boxShadow: "0px 17.989px 26.983px 8.994px rgba(0, 0, 0, 0.15)" }} ref={tableRef}>
            <table className="w-full border-collapse">
                <thead className="sticky top-0 z-20" style={{ backgroundColor: theme.colors.thertiary, fontSize: responsiveHeaderFontSize, fontWeight: responsiveHeaderFontWeight }}>
                    <tr>
                        {selectable && (
                            <th className="p-3 sticky left-0 z-30" style={{ backgroundColor: theme.colors.thertiary, width: "40px" }}>
                                <input
                                    type="checkbox"
                                    checked={selectedRows.size === data.length}
                                    onChange={handleSelectAll}
                                    className="rounded border-gray-300"
                                    style={{ width: styles.checkboxSize, height: styles.checkboxSize }}
                                />
                            </th>
                        )}
                        {renderColumnGroup(leftFixedColumns, true, "left")}
                        {renderColumnGroup(scrollableColumns)}
                        {renderColumnGroup(rightFixedColumns, true, "right")}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => {
                        const rowId = getRowId(row)
                        const isSelected = selectedRows.has(rowId)
                        const rowBgColor = isSelected ? "rgb(239 246 255)" : rowIndex % 2 === 0 ? "white" : "rgb(249 250 251)"

                        return (
                            <tr
                                key={rowId}
                                className={cn(
                                    "border-b border-gray-100",
                                    isSelected && "bg-blue-50",
                                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50",
                                )}
                            >
                                {selectable && (
                                    <td className="p-3 sticky left-0 z-10" style={{ backgroundColor: rowBgColor, width: "40px" }}>
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleSelectRow(rowId)}
                                            className="rounded border-gray-300"
                                            style={{ width: styles.checkboxSize, height: styles.checkboxSize }}
                                        />
                                    </td>
                                )}
                                {leftFixedColumns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={cn(
                                            "p-3 whitespace-nowrap sticky z-10",
                                            column.align === "center" && "text-center",
                                            column.align === "right" && "text-right",
                                        )}
                                        style={{
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            backgroundColor: rowBgColor,
                                            left: `${(selectable ? 40 : 0) + colIndex * (Number.parseInt(column.width || "0") || 0)}px`,
                                        }}
                                    >
                                        {renderCell(column, row)}
                                    </td>
                                ))}
                                {scrollableColumns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={cn(
                                            "p-3 whitespace-nowrap",
                                            column.align === "center" && "text-center",
                                            column.align === "right" && "text-right",
                                        )}
                                        style={{
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            backgroundColor: rowBgColor, // Apply background color to scrollable columns
                                        }}
                                    >
                                        {renderCell(column, row)}
                                    </td>
                                ))}

                                {showActions && (
                                    <td
                                        className="p-3 whitespace-nowrap sticky right-0 z-10"
                                        style={{
                                            backgroundColor: rowBgColor,
                                        }}
                                    >
                                        {renderActionCell(row)}
                                    </td>
                                )}


                            </tr>
                        )
                    })}
                    {/* Totals row at the bottom, if showTotals is true */}
                    {showTotals && (
                        <tr>
                            {/* If selectable, render an empty cell or "Total" label in the checkbox column */}
                            {selectable && (
                                <td
                                    className="p-3 sticky left-0 z-10"
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                        width: "40px",
                                    }}
                                >
                                    {/* Could show a placeholder or nothing. For example: */}
                                    <span style={{ color: theme.colors.textPrimary }}>–</span>
                                </td>
                            )}

                            {/* Left fixed columns for totals row */}
                            {leftFixedColumns.map((column, colIndex) => {
                                const colKey = column.accessor as keyof T
                                const cellStyle: React.CSSProperties = {
                                    backgroundColor: "rgb(240,240,240)",
                                    left: `${(selectable ? 40 : 0) + colIndex * (Number.parseInt(column.width || "0") || 0)}px`,
                                }

                                // Example: if the first left fixed column is "ID", we display "Total"
                                // Otherwise, try to display numeric value from totalsData or blank.
                                let cellValue: React.ReactNode = ""
                                if (column.header.toLowerCase() === "id") {
                                    cellValue = "Total"
                                } else if (totalsData && totalsData[colKey] !== undefined) {
                                    cellValue = totalsData[colKey] as React.ReactNode
                                }

                                return (
                                    <td
                                        key={`totals-left-${colIndex}`}
                                        className={cn(
                                            "p-3 whitespace-nowrap sticky z-10",
                                            column.align === "center" && "text-center",
                                            column.align === "right" && "text-right"
                                        )}
                                        style={{
                                            ...cellStyle,
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                        }}
                                    >
                                        {cellValue}
                                    </td>
                                )
                            })}

                            {/* Scrollable columns for totals row */}
                            {scrollableColumns.map((column, colIndex) => {
                                const colKey = column.accessor as keyof T
                                const cellStyle: React.CSSProperties = {
                                    backgroundColor: "rgb(240,240,240)",
                                }

                                let cellValue: React.ReactNode = ""
                                // If totalsData has a numeric or summary for this column, show it
                                if (totalsData && totalsData[colKey] !== undefined) {
                                    cellValue = totalsData[colKey] as React.ReactNode
                                }

                                return (
                                    <td
                                        key={`totals-scroll-${colIndex}`}
                                        className={cn(
                                            "p-3 whitespace-nowrap",
                                            column.align === "center" && "text-center",
                                            column.align === "right" && "text-right"
                                        )}
                                        style={{
                                            ...cellStyle,
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                        }}
                                    >
                                        {cellValue}
                                    </td>
                                )
                            })}

                            {/* Right fixed column for totals row (Actions) */}
                            {showActions && (
                                <td
                                    className="p-3 whitespace-nowrap sticky right-0 z-10"
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                    }}
                                >
                                    {/* Usually no actions in the totals row, so we can leave it blank */}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

