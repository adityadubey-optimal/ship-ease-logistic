

"use client"

import React, { useState, useRef, useEffect } from "react"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Check, X, Edit2, MoreVertical, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

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
    showTotals?: boolean
    totalsData?: Partial<T>
    tableStyles?: {
        headerFontSize?: string
        headerFontWeight?: string
        rowFontSize?: string
        rowFontWeight?: string
        svgSize?: string
        checkboxSize?: string
    }
    customEditComponent?: (
        value: any,
        row: T,
        column: Column<T>,
        onSave: (newValue: any) => void,
        onCancel: () => void
    ) => React.ReactNode
}

function renderActionCell<T>(
    row: any,
    isMobile: boolean,
    onApprove?: (row: any) => void,
    onReject?: (row: any) => void
) {
    function handleSelect(action: string) {
        if (action === "Approve") row.onApprove?.(row)
        if (action === "Reject") row.onReject?.(row)
    }

    if (isMobile) {
        // On mobile, show a 3-dot icon
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="icon" size="mobile" className="p-2">
                        <MoreVertical className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" style={{ width: "120px" }} className="bg-gray-200 text-black border-none">
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
    } else {
        // On desktop, show "Select Action" button
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="selectAction" size="desktop" className="w-[150px]">
                        Select Action
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" style={{ width: "150px" }} className="bg-gray-200 text-black border-none">
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
    const { theme } = useTheme()
    const isMobile = useIsMobile()

    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set())
    const [editingCell, setEditingCell] = useState<{ rowId: string | number; accessor: keyof T } | null>(null)
    const [editValue, setEditValue] = useState<string>("")
    const tableRef = useRef<HTMLDivElement>(null)

    // If isMobile => smaller default fonts & less padding
    const mobileHeaderFontSize = "0.8rem"
    const mobileHeaderFontWeight = "600"
    const mobileRowFontSize = "0.7rem"
    const mobileRowFontWeight = "400"

    // We'll also reduce cell padding for mobile
    const mobileCellPadding = "p-2"
    const desktopCellPadding = "p-3"

    // Default or merged styles
    const defaultStyles = {
        headerFontSize: isMobile ? mobileHeaderFontSize : theme.fonts.web.heading.size,
        headerFontWeight: isMobile ? mobileHeaderFontWeight : theme.fonts.web.heading.weight,
        rowFontSize: isMobile ? mobileRowFontSize : theme.fonts.web.body.size,
        rowFontWeight: isMobile ? mobileRowFontWeight : theme.fonts.web.body.weight,
        svgSize: "1rem",
        checkboxSize: "1rem",
    }
    const styles = isMobile ? { ...defaultStyles } : { ...defaultStyles, ...tableStyles }

    // Setup columns for left/scrollable/right
    const leftFixedColumns = columns.filter(
        (col) => fixedColumns.includes(col.accessor as string) && col.accessor !== "actions"
    )
    const rightFixedColumns = showActions
        ? [
            {
                header: "Actions",
                accessor: "actions" as keyof T,
                width: isMobile ? "50px" : "150px",
            },
        ]
        : []
    const scrollableColumns = columns.filter(
        (col) => !fixedColumns.includes(col.accessor as string) && col.accessor !== "actions"
    )

    // Validate fixed columns
    useEffect(() => {
        const invalidFixedColumns = fixedColumns.filter(
            (col) => !columns.some((c) => c.accessor === col) && col !== "actions"
        )
        if (invalidFixedColumns.length > 0) {
            console.warn(`Invalid fixed columns: ${invalidFixedColumns.join(", ")}. These will be ignored.`)
        }
    }, [fixedColumns, columns])

    /** Row selection logic */
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

    /** Renders an editable or standard cell */
    const renderCell = (column: Column<T>, row: T) => {
        const rowId = getRowId(row)
        const value = typeof column.accessor === "function" ? column.accessor(row) : row[column.accessor as keyof T]

        // If the column has a custom renderCell, use it
        if (column.renderCell) {
            return column.renderCell(value, row)
        }

        // If column is editable, manage edit state
        if (column.editable) {
            if (editingCell && editingCell.rowId === rowId && editingCell.accessor === column.accessor) {
                const onSave = (newValue: any) => {
                    const updatedRow = { ...row, [column.accessor as keyof T]: newValue }
                    onRowChange?.(updatedRow)
                    setEditingCell(null)
                }
                const onCancel = () => setEditingCell(null)

                // If a custom editor is provided, use it
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
            } else {
                // Not in edit mode => display cell with onClick to edit
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

        // If cell is not editable, just render the value
        return (
            <span style={{ fontSize: styles.rowFontSize, fontWeight: styles.rowFontWeight }}>
                {value as React.ReactNode}
            </span>
        )
    }

    /** Renders column group (e.g. left fixed, scrollable, right fixed) */
    const renderColumnGroup = (columnGroup: Column<T>[], isFixed = false, position: "left" | "right" = "left") => {
        // We'll define a cell padding class that changes if isMobile
        const thPadding = isMobile ? mobileCellPadding : "p-3"

        return (
            <>
                {columnGroup.map((column, index) => (
                    <th
                        key={index}
                        className={cn(
                            thPadding,                          // use p-1 or p-3 depending on isMobile
                            "text-left font-semibold whitespace-nowrap",
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
                            textWrap: 'wrap',
                            textAlign: "center",
                            backgroundColor: isFixed ? isMobile ? theme.colors.guageheaderColor : theme.colors.thertiary : undefined,
                            ...(isFixed && position === "left" && { left: `${selectable ? isMobile ? 20 : 40 : 0}px` }),
                            ...(isFixed && position === "right" && { right: "0px" }),
                        }}
                    >
                        {column.header}
                    </th>
                ))}
            </>
        )
    }

    // We define a function that returns the className for each td cell
    const getTdClassName = (columnAlign?: "left" | "center" | "right") => {
        const tdPadding = isMobile ? mobileCellPadding : "p-3"
        return cn(
            tdPadding,
            "whitespace-nowrap",
            columnAlign === "center" && "text-center",
            columnAlign === "right" && "text-right"
        )
    }


    return (
        <div
            className="overflow-auto"
            style={{
                height,
                width,
                fontSize: styles.rowFontSize,
                fontWeight: styles.rowFontWeight,
                borderRadius: "15px",
                boxShadow: "0px 17.989px 26.983px 8.994px rgba(0, 0, 0, 0.15)",
            }}
            ref={tableRef}
        >
            <table className="w-full border-collapse">
                <thead
                    className="sticky top-0 z-20"
                    style={{
                        backgroundColor: isMobile ? theme.colors.guageheaderColor : theme.colors.thertiary,
                        fontSize: styles.headerFontSize,
                        fontWeight: styles.headerFontWeight,
                        height: '50px',
                        alignItems: 'center',

                    }}
                >
                    <tr>
                        {selectable && (
                            <th
                                className={cn(isMobile ? mobileCellPadding : "p-3", "sticky left-0 z-30")}
                                style={{ backgroundColor: isMobile ? theme.colors.guageheaderColor : theme.colors.thertiary, width: "40px" }}
                            >
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
                                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                                )}
                            >
                                {selectable && (
                                    <td
                                        className={cn(isMobile ? mobileCellPadding : "p-3", "sticky left-0 z-10")}
                                        style={{ backgroundColor: rowBgColor, width: "40px" }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleSelectRow(rowId)}
                                            className="rounded border-gray-300"
                                            style={{ width: styles.checkboxSize, height: styles.checkboxSize }}
                                        />
                                    </td>
                                )}
                                {leftFixedColumns.map((column, colIndex) => {


                                    return (

                                        <td
                                            key={colIndex}
                                            className={cn(
                                                getTdClassName(column.align),
                                                "sticky z-10"
                                            )}
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                color: theme.colors.textPrimary,
                                                backgroundColor: rowBgColor,
                                                textAlign: 'center',
                                                // left: `${selectable
                                                //     ? (isMobile ? 20 : 40)
                                                //     : 0
                                                //     } + ${colIndex * (Number.parseInt(column.width || "0") || 0)
                                                //     }px`,
                                                left: `${(selectable ? isMobile ? 20 : 40 : 0) + colIndex * (Number.parseInt(column.width || "0") || 0)}px`,
                                            }}
                                        >
                                            {renderCell(column, row)}
                                        </td>
                                    )
                                })}
                                {scrollableColumns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={getTdClassName(column.align)}
                                        style={{
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            backgroundColor: rowBgColor,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {renderCell(column, row)}
                                    </td>
                                ))}

                                {showActions && (
                                    <td
                                        className={cn(isMobile ? mobileCellPadding : "p-3", "whitespace-nowrap sticky right-0 z-10")}
                                        style={{
                                            backgroundColor: rowBgColor,
                                            width: isMobile ? "50px" : "150px",
                                        }}
                                    >
                                        {renderActionCell(row, isMobile, onApprove, onReject)}
                                    </td>
                                )}
                            </tr>
                        )
                    })}
                    {/* Totals row at the bottom, if showTotals is true */}
                    {showTotals && (
                        <tr>
                            {selectable && (
                                <td
                                    className={cn(isMobile ? mobileCellPadding : "p-3", "sticky left-0 z-10")}
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                        width: "40px",
                                    }}
                                >
                                    <span style={{ color: theme.colors.textPrimary }}>–</span>
                                </td>
                            )}

                            {/* Left fixed columns for totals row */}
                            {leftFixedColumns.map((column, colIndex) => {


                                const colKey = column.accessor as keyof T
                                const cellStyle: React.CSSProperties = {
                                    backgroundColor: "rgb(240,240,240)",
                                    // left: `${selectable
                                    //     ? (isMobile ? 20 : 40)
                                    //     : 0
                                    //     } + ${colIndex * (Number.parseInt(column.width || "0") || 0)
                                    //     }px`,
                                    left: `${(selectable ? isMobile ? 20 : 40 : 0) + colIndex * (Number.parseInt(column.width || "0") || 0)}px`,
                                }

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
                                            isMobile ? mobileCellPadding : "p-3",
                                            "whitespace-nowrap sticky z-10",
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
                                if (totalsData && totalsData[colKey] !== undefined) {
                                    cellValue = totalsData[colKey] as React.ReactNode
                                }

                                return (
                                    <td
                                        key={`totals-scroll-${colIndex}`}
                                        className={cn(
                                            isMobile ? mobileCellPadding : "p-3",
                                            "whitespace-nowrap",
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
                                    className={cn(isMobile ? mobileCellPadding : "p-3", "whitespace-nowrap sticky right-0 z-10")}
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                        width: isMobile ? "50px" : "150px",
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

