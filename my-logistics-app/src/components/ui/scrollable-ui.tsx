

"use client"

import React, { useState, useRef, useEffect } from "react"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { MoreVertical } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/context/ThemeContext"
import { useIsMobile } from "@/hooks/useMobile"

interface DocumentsType {
    commInvoice?: boolean
    marksNumbers?: boolean
    bookingConfirm?: boolean
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

interface ScrollableDataTableProps<
    T extends {
        documents?: DocumentsType
    }
> {
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
    showSSCCLabelAsInputRadioButton?: boolean
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
    customActions?: any
    actionFlag?: string

    /** If true, we show the 2-row "Documents" heading with 3 sub-columns. */
    showDocumentsSubcolumns?: boolean

    /** If true, we do a single-level approach for "Packing List" & "SSCC Label" columns. */
    showDocuments?: boolean
}

/** Renders the action cell (unchanged). */
function renderActionCell<T>(
    row: any,
    isMobile: boolean,
    onApprove?: (row: any) => void,
    onReject?: (row: any) => void,
    customActions?: any,
    actionFlag?: string
) {

    function handleSelect(action: string) {
        if (action === "Approve") row.onApprove?.(row)
        if (action === "Reject") row.onReject?.(row)
        if (action === "View") row.View?.(row)
        if (action === "Download") row.Download?.(row)
        if (action === "Accept") row.onApprove?.(row)
        if (action === "Decline") row.onReject?.(row)
        if (action === "SubmitDocs") row.SubmitDocs?.(row)
        if (action === "PrintSSCC") row.PrintSSCC?.(row)
        if (action === "RequestAirShipment") row.RequestAirShipment?.(row)
        if (action === "UploadPackingList") row.UploadPackingList?.(row)
        if (action === "BookCargo") row.BookCargo?.(row)
        if (action === 'sendReminder') row.SendReminder?.(row)


    }

    if (actionFlag) {
        if (actionFlag === 'active_purchase_order') {

            return (<DropdownMenu>
                <DropdownMenuTrigger asChild>

                    {isMobile ? <Button variant="icon" size="mobile" className="p-2">
                        <MoreVertical className="w-4 h-4" />
                    </Button> : <Button variant="selectAction" size="desktop" className="w-[150px]">
                        Select Action
                    </Button>
                    }

                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" style={{ width: "150px" }} className="bg-gray-200 text-black border-none">
                    <DropdownMenuItem
                        onClick={() => handleSelect("View")}
                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                    >
                        View                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 border-gray-400" />
                    <DropdownMenuItem
                        onClick={() => handleSelect("Download")}
                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                    >
                        Download
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 border-gray-400" />
                    <DropdownMenuItem
                        onClick={() => handleSelect("Accept")}
                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                    >
                        Accept
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 border-gray-400" />
                    <DropdownMenuItem
                        onClick={() => handleSelect("Decline")}
                        className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                    >
                        Decline
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="my-1 border-gray-400" />
                </DropdownMenuContent>
            </DropdownMenu>
            )

        }
        if (actionFlag === 'ship_by_date_booking') {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        {isMobile ? <Button variant="icon" size="mobile" className="p-2">
                            <MoreVertical className="w-4 h-4" />
                        </Button> : <Button variant="selectAction" size="desktop" className="w-[150px]">
                            Select Action
                        </Button>
                        }

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" style={{ width: "150px" }} className="bg-gray-200 text-black border-none">
                        <DropdownMenuItem
                            onClick={() => handleSelect("BookCargo")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Book Cargo                    </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("SubmitDocs")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Submit Docs                    </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("PrintSSCC")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Print SSCC
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("RequestAirShipment")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Request Air Shipment
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("UploadPackingList")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Upload Packing List
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("View")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            View PO
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                        <DropdownMenuItem
                            onClick={() => handleSelect("Download")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            DownloadPO
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
        if (actionFlag === 'send_reminder_only') {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        {isMobile ? <Button variant="icon" size="mobile" className="p-2">
                            <MoreVertical className="w-4 h-4" />
                        </Button> : <Button variant="selectAction" size="desktop" className="w-[150px]">
                            Select Action
                        </Button>
                        }

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" style={{ width: "150px" }} className="bg-gray-200 text-black border-none">
                        <DropdownMenuItem
                            onClick={() => handleSelect("sendReminder")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Send Reminder                    </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />

                        <DropdownMenuItem
                            onClick={() => handleSelect("View")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            View    Document                </DropdownMenuItem>

                    </DropdownMenuContent>


                </DropdownMenu>
            )
        }
        if (actionFlag === 'send_reminder_with_shipping_information') {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>

                        {isMobile ? <Button variant="icon" size="mobile" className="p-2">
                            <MoreVertical className="w-4 h-4" />
                        </Button> : <Button variant="selectAction" size="desktop" className="w-[150px]">
                            Select Action
                        </Button>
                        }

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" style={{ width: "150px" }} className="bg-gray-200 text-black border-none">
                        <DropdownMenuItem
                            onClick={() => handleSelect("sendReminder")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            Send Reminder                    </DropdownMenuItem>
                        <DropdownMenuSeparator className="my-1 border-gray-400" />

                        <DropdownMenuItem
                            onClick={() => handleSelect("View")}
                            className="hover:bg-gray-300 focus:bg-gray-300 cursor-pointer"
                        >
                            View    Shipping Information                </DropdownMenuItem>

                    </DropdownMenuContent>


                </DropdownMenu>
            )
        }

    }
    else if (isMobile) {
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
    }

    else {
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


export function ScrollableDataTable<T extends { documents?: DocumentsType }>({
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
    showSSCCLabelAsInputRadioButton = false,
    tableStyles = {},
    customEditComponent,
    showTotals = false,
    totalsData,
    customActions,
    actionFlag,

    showDocumentsSubcolumns = false,
    showDocuments = false,
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
    const mobileCellPadding = "p-2"
    const desktopCellPadding = "p-3"

    // Merge table styles
    const defaultStyles = {
        headerFontSize: isMobile ? mobileHeaderFontSize : theme.fonts.web.heading.size,
        headerFontWeight: isMobile ? mobileHeaderFontWeight : theme.fonts.web.heading.weight,
        rowFontSize: isMobile ? mobileRowFontSize : theme.fonts.web.body.size,
        rowFontWeight: isMobile ? mobileRowFontWeight : theme.fonts.web.body.weight,
        svgSize: "1rem",
        checkboxSize: "1rem",
    }
    const styles = isMobile ? { ...defaultStyles } : { ...defaultStyles, ...tableStyles }

    // Separate columns into leftFixed, rightFixed, and scrollable
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
            console.warn(`Invalid fixed columns: ${invalidFixedColumns.join(", ")}. Ignoring them.`)
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
        const value =
            typeof column.accessor === "function"
                ? column.accessor(row)
                : row[column.accessor as keyof T]

        // If column has a custom cell renderer
        if (column.renderCell) {
            return column.renderCell(value, row)
        }

        // If editable
        if (column.editable) {
            if (editingCell && editingCell.rowId === rowId && editingCell.accessor === column.accessor) {
                const onSave = (newValue: any) => {
                    const updatedRow = { ...row, [column.accessor as keyof T]: newValue }
                    onRowChange?.(updatedRow)
                    setEditingCell(null)
                }
                const onCancel = () => setEditingCell(null)

                if (customEditComponent) {
                    return customEditComponent(value, row, column, onSave, onCancel)
                }

                // fallback input
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
                        style={{
                            fontSize: styles.rowFontSize,
                            fontWeight: styles.rowFontWeight,
                            width: "100%",
                        }}
                    />
                )
            } else {
                // not in edit mode
                return (
                    <div
                        onClick={() => {
                            setEditingCell({ rowId, accessor: column.accessor as keyof T })
                            setEditValue(String(value))
                        }}
                        style={{
                            cursor: "pointer",
                            fontSize: styles.rowFontSize,
                            fontWeight: styles.rowFontWeight,
                        }}
                    >
                        {value as React.ReactNode}
                    </div>
                )
            }
        }

        // normal read‐only cell
        return (
            <span style={{ fontSize: styles.rowFontSize, fontWeight: styles.rowFontWeight }}>
                {value as React.ReactNode}
            </span>
        )
    }

    // Helper for <th> group
    const renderColumnGroup = (
        columnGroup: Column<T>[],
        isFixed = false,
        position: "left" | "right" = "left",
        rowSpan = 1
    ) => {
        const thPadding = isMobile ? mobileCellPadding : "p-3"

        return (
            <>
                {columnGroup.map((column, index) => (
                    <th
                        key={index}
                        className={cn(
                            thPadding,
                            "text-left font-semibold whitespace-nowrap",
                            column.align === "center" && "text-center",
                            column.align === "right" && "text-right",
                            isFixed && "sticky bg-white z-10",
                            isFixed && position === "left" && "left-0",
                            isFixed && position === "right" && "right-0"
                        )}
                        style={{
                            width: column.width,
                            fontSize: styles.headerFontSize,
                            fontWeight: styles.headerFontWeight,
                            color: theme.colors.textPrimary,
                            textAlign: "center",
                            backgroundColor: isFixed
                                ? isMobile
                                    ? theme.colors.guageheaderColor
                                    : theme.colors.thertiary
                                : undefined,
                            ...(isFixed && position === "left" && {
                                left: `${selectable ? (isMobile ? 20 : 40) : 0}px`,
                            }),
                            ...(isFixed && position === "right" && { right: "0px" }),
                        }}
                        rowSpan={rowSpan}
                    >
                        {column.header}
                    </th>
                ))}
            </>
        )
    }

    // Helper for <td> classes
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
                {/* 
          #1: if !showDocumentsSubcolumns => old single row
          #2: else if !showDocuments => 2-level approach
          #3: else => single-level approach with "Packing List" & "SSCC Label"
        */}

                {!showDocumentsSubcolumns ? (
                    // #1 Old single row
                    <thead
                        className="sticky top-0 z-20"
                        style={{
                            backgroundColor: isMobile
                                ? theme.colors.guageheaderColor
                                : theme.colors.thertiary,
                            fontSize: styles.headerFontSize,
                            fontWeight: styles.headerFontWeight,
                            height: "50px",
                            alignItems: "center",
                        }}
                    >
                        <tr>
                            {selectable && (
                                <th
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "sticky left-0 z-30"
                                    )}
                                    style={{
                                        backgroundColor: isMobile
                                            ? theme.colors.guageheaderColor
                                            : theme.colors.thertiary,
                                        width: "40px",
                                    }}
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
                ) : !showDocuments ? (
                    // #2 2-level approach (3 subcolumns: Comm. Invoice, Marks, Booking)
                    <thead
                        className="sticky top-0 z-20"
                        style={{
                            backgroundColor: isMobile
                                ? theme.colors.guageheaderColor
                                : theme.colors.thertiary,
                            fontSize: styles.headerFontSize,
                            fontWeight: styles.headerFontWeight,
                            height: "50px",
                            alignItems: "center",
                        }}
                    >
                        <tr>
                            {selectable && (
                                <th
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "sticky left-0 z-30"
                                    )}
                                    style={{
                                        backgroundColor: isMobile
                                            ? theme.colors.guageheaderColor
                                            : theme.colors.thertiary,
                                        width: "40px",
                                    }}
                                    rowSpan={2}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.size === data.length}
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300"
                                        style={{
                                            width: styles.checkboxSize,
                                            height: styles.checkboxSize,
                                        }}
                                    />
                                </th>
                            )}
                            {renderColumnGroup(leftFixedColumns, true, "left", 2)}
                            {scrollableColumns
                                .filter((col) => col.header !== "Documents")
                                .map((col, index) => (
                                    <th
                                        key={index}
                                        className={cn(
                                            isMobile ? mobileCellPadding : "p-3",
                                            "text-left font-semibold whitespace-nowrap"
                                        )}
                                        style={{
                                            width: col.width,
                                            fontSize: styles.headerFontSize,
                                            fontWeight: styles.headerFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                            backgroundColor: isMobile
                                                ? theme.colors.guageheaderColor
                                                : theme.colors.thertiary,
                                        }}
                                        rowSpan={2}
                                    >
                                        {col.header}
                                    </th>
                                ))}
                            <th className="text-center font-semibold" style={{ width: "180px" }} colSpan={3}>
                                Documents
                            </th>
                            {rightFixedColumns.map((column, index) => (
                                <th
                                    key={index}
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "text-left font-semibold whitespace-nowrap sticky bg-white z-10"
                                    )}
                                    style={{
                                        width: column.width,
                                        fontSize: styles.headerFontSize,
                                        fontWeight: styles.headerFontWeight,
                                        color: theme.colors.textPrimary,
                                        textAlign: "center",
                                        right: "0px",
                                        backgroundColor: isMobile
                                            ? theme.colors.guageheaderColor
                                            : theme.colors.thertiary,
                                    }}
                                    rowSpan={2}
                                >
                                    {column.header}
                                </th>
                            ))}
                        </tr>
                        <tr>
                            <th>Comm. Invoice</th>
                            <th>Marks &amp; Numbers</th>
                            <th>Booking Confirm</th>
                        </tr>
                    </thead>
                ) : (
                    // #3 single-level approach with "Packing List" & "SSCC Label"
                    <thead
                        className="sticky top-0 z-20"
                        style={{
                            backgroundColor: isMobile
                                ? theme.colors.guageheaderColor
                                : theme.colors.thertiary,
                            fontSize: styles.headerFontSize,
                            fontWeight: styles.headerFontWeight,
                            height: "50px",
                            alignItems: "center",
                        }}
                    >
                        <tr>
                            {selectable && (
                                <th
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "sticky left-0 z-30"
                                    )}
                                    style={{
                                        backgroundColor: isMobile
                                            ? theme.colors.guageheaderColor
                                            : theme.colors.thertiary,
                                        width: "40px",
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.size === data.length}
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300"
                                        style={{
                                            width: styles.checkboxSize,
                                            height: styles.checkboxSize,
                                        }}
                                    />
                                </th>
                            )}

                            {/* Left fixed columns */}
                            {renderColumnGroup(leftFixedColumns, true, "left")}

                            {/* 
                Scrollable columns except “Documents” 
                (we’re adding our own single-level columns for “Packing List” & “SSCC Label”) 
              */}
                            {scrollableColumns
                                .filter((col) => col.header !== "Documents")
                                .map((col, index) => (
                                    <th
                                        key={index}
                                        className={cn(
                                            isMobile ? mobileCellPadding : "p-3",
                                            "text-left font-semibold whitespace-nowrap"
                                        )}
                                        style={{
                                            width: col.width,
                                            fontSize: styles.headerFontSize,
                                            fontWeight: styles.headerFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                            backgroundColor: isMobile
                                                ? theme.colors.guageheaderColor
                                                : theme.colors.thertiary,
                                        }}
                                    >
                                        {col.header}
                                    </th>
                                ))}

                            {/* The two new columns for single-level docs */}
                            <th
                                style={{
                                    width: "90px",
                                    textAlign: "center",

                                }}
                            >
                                Packing List
                            </th>
                            <th
                                style={{
                                    width: "90px",
                                    textAlign: "center",
                                }}
                            >
                                SSCC Label
                            </th>

                            {/* Right fixed columns */}
                            {renderColumnGroup(rightFixedColumns, true, "right")}
                        </tr>
                    </thead>
                )}

                <tbody>
                    {data.map((row, rowIndex) => {
                        const rowId = getRowId(row)
                        const isSelected = selectedRows.has(rowId)
                        const rowBgColor = isSelected ? "rgba(118, 118, 118, 0.30)" : "white"

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
                                        className={cn(
                                            isMobile ? mobileCellPadding : "p-3",
                                            "sticky left-0 z-10"
                                        )}
                                        style={{ backgroundColor: rowBgColor, width: "40px" }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => handleSelectRow(rowId)}
                                            className="rounded border-gray-300"
                                            style={{
                                                width: styles.checkboxSize,
                                                height: styles.checkboxSize,
                                            }}
                                        />
                                    </td>
                                )}

                                {/* left fixed columns */}
                                {leftFixedColumns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={cn(getTdClassName(column.align), "sticky z-10")}
                                        style={{
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            backgroundColor: rowBgColor,
                                            textAlign: "center",
                                            left: `${(selectable ? (isMobile ? 20 : 40) : 0) +
                                                colIndex * (Number.parseInt(column.width || "0") || 0)
                                                }px`,
                                        }}
                                    >
                                        {renderCell(column, row)}
                                    </td>
                                ))}

                                {/* #1 If NOT showDocumentsSubcolumns => old approach (just normal columns) */}
                                {!showDocumentsSubcolumns &&
                                    scrollableColumns.map((column, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={getTdClassName(column.align)}
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                color: theme.colors.textPrimary,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                            }}
                                        >
                                            {renderCell(column, row)}
                                        </td>
                                    ))}

                                {/* #2 If showDocumentsSubcolumns => skip "Documents" column and do 3 sub-cells */}
                                {showDocumentsSubcolumns && !showDocuments && (
                                    <>
                                        {scrollableColumns
                                            .filter((col) => col.header !== "Documents")
                                            .map((column, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className={getTdClassName(column.align)}
                                                    style={{
                                                        fontSize: styles.rowFontSize,
                                                        fontWeight: styles.rowFontWeight,
                                                        color: theme.colors.textPrimary,
                                                        backgroundColor: rowBgColor,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {renderCell(column, row)}
                                                </td>
                                            ))}

                                        {/* 3 sub‐cells for row.documents */}
                                        <td
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                            }}
                                        >
                                            {row.documents?.commInvoice ? "●" : "○"}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                            }}
                                        >
                                            {row.documents?.marksNumbers ? "●" : "○"}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                            }}
                                        >
                                            {row.documents?.bookingConfirm ? "●" : "○"}
                                        </td>
                                    </>
                                )}

                                {/* #3 If showDocumentsSubcolumns && showDocuments => single-level approach: 2 columns */}
                                {showDocumentsSubcolumns && showDocuments && (
                                    <>
                                        {scrollableColumns
                                            .filter((col) => col.header !== "Documents")
                                            .map((column, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    className={getTdClassName(column.align)}
                                                    style={{
                                                        fontSize: styles.rowFontSize,
                                                        fontWeight: styles.rowFontWeight,
                                                        color: theme.colors.textPrimary,
                                                        backgroundColor: rowBgColor,
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {renderCell(column, row)}
                                                </td>
                                            ))}

                                        {/* 2 sub‐cells: "Packing List" => marksNumbers, "SSCC Label" => bookingConfirm */}
                                        <td
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                                width: "80px",
                                            }}
                                        >
                                            {row.documents?.marksNumbers ? "●" : "○"}
                                        </td>
                                        <td
                                            style={{
                                                fontSize: styles.rowFontSize,
                                                fontWeight: styles.rowFontWeight,
                                                backgroundColor: rowBgColor,
                                                textAlign: "center",
                                                width: "80px",
                                            }}
                                        >
                                            {row.documents?.bookingConfirm ? "●" : "○"}
                                        </td>
                                    </>
                                )}

                                {showActions && (
                                    <td
                                        className={cn(
                                            isMobile ? mobileCellPadding : "p-3",
                                            "whitespace-nowrap sticky right-0 z-10"
                                        )}
                                        style={{
                                            backgroundColor: rowBgColor,
                                            width: isMobile ? "50px" : "150px",
                                        }}
                                    >
                                        {renderActionCell(
                                            row,
                                            isMobile,
                                            onApprove,
                                            onReject,
                                            customActions,
                                            actionFlag
                                        )}
                                    </td>
                                )}
                            </tr>
                        )
                    })}

                    {/* Totals row */}
                    {showTotals && (
                        <tr>
                            {selectable && (
                                <td
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "sticky left-0 z-10"
                                    )}
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                        width: "40px",
                                    }}
                                >
                                    <span style={{ color: theme.colors.textPrimary }}>–</span>
                                </td>
                            )}

                            {/* left fixed totals */}
                            {leftFixedColumns.map((column, colIndex) => {
                                const colKey = column.accessor as keyof T
                                const cellStyle: React.CSSProperties = {
                                    backgroundColor: "rgb(240,240,240)",
                                    left: `${(selectable ? (isMobile ? 20 : 40) : 0) +
                                        colIndex * (Number.parseInt(column.width || "0") || 0)
                                        }px`,
                                }

                                let cellValue: React.ReactNode = ""
                                if (column.header.toLowerCase() === "id") {
                                    cellValue = "Total"
                                } else if (showTotals && totalsData && totalsData[colKey] !== undefined) {
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

                            {/* If not subcolumns => normal scrollable columns */}
                            {!showDocumentsSubcolumns &&
                                scrollableColumns.map((column, colIndex) => {
                                    const colKey = column.accessor as keyof T
                                    const cellStyle: React.CSSProperties = {
                                        backgroundColor: "rgb(240,240,240)",
                                    }
                                    let cellValue: React.ReactNode = ""
                                    if (showTotals && totalsData && totalsData[colKey] !== undefined) {
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

                            {/* If showDocumentsSubcolumns & !showDocuments => 3 subcolumns for docs */}
                            {showDocumentsSubcolumns && !showDocuments && (
                                <>
                                    {scrollableColumns
                                        .filter((col) => col.header !== "Documents")
                                        .map((column, colIndex) => {
                                            const colKey = column.accessor as keyof T
                                            const cellStyle: React.CSSProperties = {
                                                backgroundColor: "rgb(240,240,240)",
                                            }
                                            let cellValue: React.ReactNode = ""
                                            if (
                                                showTotals &&
                                                totalsData &&
                                                totalsData[colKey] !== undefined
                                            ) {
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

                                    {/* sub-totals for 3 doc columns if needed */}
                                    <td
                                        style={{
                                            backgroundColor: "rgb(240,240,240)",
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                        }}
                                    />
                                    <td
                                        style={{
                                            backgroundColor: "rgb(240,240,240)",
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                        }}
                                    />
                                    <td
                                        style={{
                                            backgroundColor: "rgb(240,240,240)",
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                        }}
                                    />
                                </>
                            )}

                            {/* If showDocumentsSubcolumns && showDocuments => 2 single-level columns */}
                            {showDocumentsSubcolumns && showDocuments && (
                                <>
                                    {scrollableColumns
                                        .filter((col) => col.header !== "Documents")
                                        .map((column, colIndex) => {
                                            const colKey = column.accessor as keyof T
                                            const cellStyle: React.CSSProperties = {
                                                backgroundColor: "rgb(240,240,240)",
                                            }
                                            let cellValue: React.ReactNode = ""
                                            if (
                                                showTotals &&
                                                totalsData &&
                                                totalsData[colKey] !== undefined
                                            ) {
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

                                    {/* sub-totals for 2 doc columns if needed */}
                                    <td
                                        style={{
                                            backgroundColor: "rgb(240,240,240)",
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                            width: "80px",
                                        }}
                                    />
                                    <td
                                        style={{
                                            backgroundColor: "rgb(240,240,240)",
                                            fontSize: styles.rowFontSize,
                                            fontWeight: styles.rowFontWeight,
                                            color: theme.colors.textPrimary,
                                            textAlign: "center",
                                            width: "80px",
                                        }}
                                    />
                                </>
                            )}

                            {/* Right fixed totals cell for actions */}
                            {showActions && (
                                <td
                                    className={cn(
                                        isMobile ? mobileCellPadding : "p-3",
                                        "whitespace-nowrap sticky right-0 z-10"
                                    )}
                                    style={{
                                        backgroundColor: "rgb(240,240,240)",
                                        width: isMobile ? "50px" : "150px",
                                    }}
                                >
                                    {/* Usually blank in totals row */}
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}