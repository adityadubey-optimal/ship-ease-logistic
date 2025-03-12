"use client"

import * as React from "react"
import { addDays, format, isSameDay } from "date-fns"
import { Calendar } from "@/components/ui/calendar"  // shadcn Calendar component
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ColorDate {
    date: Date
    color: string
}

interface CalendarWithColorsProps {
    /** If true, allows selecting a date range; otherwise single date selection. */
    range?: boolean
    /** The current selection. For single date: a Date; for range: an array [startDate, endDate]. */
    value?: Date | [Date | undefined, Date | undefined] | undefined
    /** Called when a date (or range) is selected. */
    onChange?: (val: Date | [Date | undefined, Date | undefined]) => void
    /** Array of dates with colors to highlight. */
    coloredDates?: ColorDate[]
    /** Function to disable dates. */
    disableDate?: (date: Date) => boolean
    /** If provided, only dates in this array are selectable. */
    availableDates?: Date[]
    /** Dates that are blocked/disabled; they will be styled with their provided color. */
    blockedDates?: ColorDate[]
    /** Optional label or heading (e.g. "For Ship-by-Date 04 Mar 2025"). */
    label?: string
    /** Called when the user cancels the selection. */
    onCancel?: () => void
    /** Called when the user confirms the selection. */
    onConfirm?: () => void
}

function transformValue(
    val: Date | [Date | undefined, Date | undefined] | undefined,
    isRange: boolean
): Date | { from: Date | undefined; to: Date | undefined } | undefined {
    if (!val) return undefined
    if (!isRange) return val as Date
    const [start, end] = val as [Date | undefined, Date | undefined]
    return { from: start, to: end }
}

function untransformValue(
    val: Date | { from: Date | undefined; to: Date | undefined } | undefined,
    isRange: boolean
): Date | [Date | undefined, Date | undefined] | undefined {
    if (!val) return undefined
    if (!isRange) return val as Date
    const rangeVal = val as { from?: Date; to?: Date }
    return [rangeVal.from, rangeVal.to]
}

function updateRangeValue(date: Date, current: { from?: Date; to?: Date }) {
    const { from, to } = current || {}
    if (!from) {
        return { from: date, to: undefined }
    }
    if (!to) {
        return date < from ? { from: date, to: from } : { from, to: date }
    }
    return { from: date, to: undefined }
}

export function CalendarWithColors({
    range = false,
    value,
    onChange,
    coloredDates = [],
    disableDate,
    availableDates,
    blockedDates,
    label,
    onCancel,
    onConfirm,
}: CalendarWithColorsProps) {
    const [internalValue, setInternalValue] = React.useState<
        Date | { from: Date | undefined; to: Date | undefined } | undefined
    >(transformValue(value, range))

    React.useEffect(() => {
        setInternalValue(transformValue(value, range))
    }, [value, range])

    function handleDateChange(newVal: unknown) {
        setInternalValue(newVal as any)
    }

    function handleOk() {
        const userVal = untransformValue(internalValue, range)
        if (userVal) onChange?.(userVal)
        onConfirm?.()
    }

    return (
        <div className="max-w-sm bg-[#F3EFFF] text-black p-4 rounded-lg shadow-md">
            {/* Header */}
            <div className="flex items-center justify-between mb-2">
                {label && <span className="font-semibold">{label}</span>}
            </div>

            <Calendar
                mode={range ? "range" : "single"}
                selected={internalValue}
                onSelect={handleDateChange}
                renderDay={(dateObj: any) => {
                    const { date, inCurrentMonth, selected } = dateObj
                    const isToday = isSameDay(date, new Date())

                    // Check availableDates if provided
                    let isAvailable = true
                    if (availableDates && availableDates.length > 0) {
                        isAvailable = availableDates.some(avDate => isSameDay(avDate, date))
                    }
                    const isDisabledByFunc = disableDate ? disableDate(date) : false
                    let finalDisabled = !isAvailable || isDisabledByFunc

                    // Check blockedDates: if found, mark as disabled and use its color
                    let blockedColor = ""
                    if (blockedDates && blockedDates.length > 0) {
                        const blockedItem = blockedDates.find(bd => isSameDay(bd.date, date))
                        if (blockedItem) {
                            finalDisabled = true
                            blockedColor = blockedItem.color
                        }
                    }

                    let dayBg = ""
                    // Use coloredDates if provided
                    const colorItem = coloredDates.find(cd => isSameDay(cd.date, date))
                    if (colorItem) {
                        dayBg = colorItem.color
                    }
                    // If date is blocked, override with blocked color
                    if (blockedColor) {
                        dayBg = blockedColor
                    }

                    return (
                        <button
                            type="button"
                            disabled={finalDisabled}
                            className={cn(
                                "h-9 w-9 rounded-full flex items-center justify-center text-sm",
                                inCurrentMonth ? "text-black" : "text-gray-400",
                                selected ? "bg-indigo-200" : "",
                                finalDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-50",
                                isToday && "ring-2 ring-purple-500 ring-offset-2 ring-offset-[#F3EFFF]"
                            )}
                            style={{
                                backgroundColor: dayBg || (selected ? "#C8B5F4" : "transparent"),
                            }}
                            onClick={() => {
                                if (!finalDisabled) {
                                    handleDateChange(
                                        range
                                            ? updateRangeValue(date, internalValue as { from?: Date; to?: Date })
                                            : date
                                    )
                                }
                            }}
                        >
                            {format(date, "d")}
                        </button>
                    )
                }}
            />

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-3">
                <Button variant="approve" onClick={onCancel}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleOk}>
                    OK
                </Button>
            </div>
        </div>
    )
}