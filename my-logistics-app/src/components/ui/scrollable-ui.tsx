"use client"

import React, { useState, useRef, useEffect } from "react"
import { Check, X, Edit2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"

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
    data: T[]
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
    tableStyles?: {
        headerFontSize?: string
        headerFontWeight?: string
        rowFontSize?: string
        rowFontWeight?: string
        svgSize?: string
        checkboxSize?: string
    }
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
}: ScrollableDataTableProps<T>) {
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

    const leftFixedWidth = getFixedColumnWidth(leftFixedColumns)
    const rightFixedWidth = getFixedColumnWidth(rightFixedColumns)

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

    const handleEditClick = (rowId: string | number, accessor: keyof T, value: any) => {
        setEditingCell({ rowId, accessor })
        setEditValue(String(value))
    }

    const handleEditChange = (value: string) => {
        setEditValue(value)
    }

    const handleEditSave = () => {
        if (editingCell) {
            const { rowId, accessor } = editingCell
            const rowIndex = data.findIndex((row) => getRowId(row) === rowId)
            if (rowIndex !== -1) {
                const updatedRow = { ...data[rowIndex], [accessor]: editValue }
                onRowChange?.(updatedRow)
            }
        }
        setEditingCell(null)
    }

    const handleToggleChange = (rowId: string | number, accessor: keyof T, value: boolean) => {
        const rowIndex = data.findIndex((row) => getRowId(row) === rowId)
        if (rowIndex !== -1) {
            const updatedRow = { ...data[rowIndex], [accessor]: !value }
            onRowChange?.(updatedRow)
        }
    }

    const renderCell = (column: Column<T>, row: T) => {
        const rowId = getRowId(row)
        const value = typeof column.accessor === "function" ? column.accessor(row) : row[column.accessor as keyof T]

        if (column.renderCell) {
            return column.renderCell(value, row)
        }

        if (column.editable) {
            if (editingCell && editingCell.rowId === rowId && editingCell.accessor === column.accessor) {
                return (
                    <div className="flex items-center">
                        <Input
                            value={editValue}
                            onChange={(e) => handleEditChange(e.target.value)}
                            className="w-full"
                            type={column.type === "number" ? "number" : "text"}
                        />
                        <Button variant="icon" size="mobile" onClick={handleEditSave} className="ml-2">
                            <Check style={{ width: styles.svgSize, height: styles.svgSize }} />
                        </Button>
                    </div>
                )
            } else if (column.type === "boolean") {
                return (
                    <Switch
                        checked={Boolean(value)}
                        onCheckedChange={() => handleToggleChange(rowId, column.accessor as keyof T, Boolean(value))}
                    />
                )
            } else {
                return (
                    <div className="flex items-center justify-between">
                        <span style={{ fontSize: styles.rowFontSize, fontWeight: styles.rowFontWeight }}>
                            {value as React.ReactNode}
                        </span>
                        <Button
                            variant="icon"
                            size="mobile"
                            onClick={() => handleEditClick(rowId, column.accessor as keyof T, value)}
                        >
                            <Edit2 style={{ width: styles.svgSize, height: styles.svgSize }} />
                        </Button>
                    </div>
                )
            }
        }

        if (typeof value === "number" && column.header.toLowerCase().includes("variation")) {
            const percentage = value as number
            const color = percentage <= 3 ? theme.colors.success : theme.colors.error
            return <span style={{ color }}>{percentage}%</span>
        }

        return value as React.ReactNode
    }

    const renderActionCell = (row: T) => {
        const rowId = getRowId(row)
        const isApproved = (row as any).status === "approved"

        if (isApproved) {
            return <div className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-sm inline-block">Approved</div>
        }

        return (
            <div className="flex gap-2">
                <Button variant="reject" size="mobile" onClick={() => onReject?.(row)}>
                    <X style={{ width: styles.svgSize, height: styles.svgSize }} />
                </Button>
                <Button variant="approve" size="mobile" onClick={() => onApprove?.(row)}>
                    <Check style={{ width: styles.svgSize, height: styles.svgSize }} />
                </Button>
            </div>
        )
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
        <div className="overflow-auto" style={{ height, width }} ref={tableRef}>
            <table className="w-full border-collapse">
                <thead className="sticky top-0 z-20" style={{ backgroundColor: theme.colors.thertiary }}>
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
                </tbody>
            </table>
        </div>
    )
}

