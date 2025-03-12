
"use client"

import * as React from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import CargoDateCalendar from "@/components/ui/cargoDateCalendar"
import { Calendar } from "@/components/ui/calendar"
import type { CargoDateModalProps } from "@/components/ui/calenderProps"
import type { DateRange } from "react-day-picker"
import { useTheme } from "@/context/ThemeContext"
import { addDays } from "date-fns"
import useResponsiveSize from "@/hooks/useResponsiveSize"
import AcceptRejectButton from "../ui/AcceptRejectButton"
import DataChartDesktop from "./dataChart"
export function CargoDateModalMultipalPO({
    isOpen,
    onClose,
    onConfirm,
    poNumber,
    mode,
    availableDates,
    blockedDates,
}: CargoDateModalProps) {
    const { theme } = useTheme()

    // Single-date or range selection state
    const [selected, setSelected] = React.useState<Date | DateRange | undefined>(
        mode === "single" ? undefined : { from: undefined, to: undefined }
    )

    const handleConfirm = () => {
        onConfirm(selected)
        onClose()
    }

    // For a single date:
    const [singleDate, setSingleDate] = React.useState<Date | undefined>()

    // For range:
    const [rangeValue, setRangeValue] = React.useState<{ from?: Date; to?: Date }>({})

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            {/* Force full-screen coverage and remove default rounding */}
            <DialogContent
                className="sm:max-w-full w-[90%] h-[90%] overflow-auto"
                style={{
                    backgroundColor: "#E2E2FC", // Lavender-like background
                    borderRadius: 0,

                }}
            >
                <div className="flex flex-col h-full">
                    {/* Top bar with “Close” button */}
                    <div className="flex items-center justify-end p-4">

                    </div>

                    {/* Main content: center the PO info, legend, and calendar */}
                    <div className="flex-1 flex flex-col items-center justify-center px-4">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <h1 className="text-2xl font-bold mb-4">PO: {poNumber}</h1>
                            <h2 className="text-lg font-medium mb-4" style={{ fontSize: `${useResponsiveSize(1.3, 1.7)}rem`, fontWeight: 500, color: theme.colors.calenderHeader }}>
                                Select Cargo ready date for this PO
                            </h2>
                        </div>

                        {/* Legend for “Days Available to Book” */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-4 h-4 bg-green-300 rounded" style={{ background: theme.colors.calendarAvailable }} />
                            <span className="text-sm" style={{ fontSize: `${useResponsiveSize(0.85, 1.15)}rem`, fontWeight: 500, color: theme.colors.calendarText }}>Days Available to Book</span>
                        </div>



                        <div className="p-4" style={{}}>

                            <Calendar
                                mode="single"
                                selected={singleDate}
                                onSelect={(val: any) => {
                                    if (val instanceof Date) {
                                        setSingleDate(val)
                                    }
                                }}
                                blockedDates={[
                                    addDays(new Date(), 2),
                                    addDays(new Date(), 3),
                                ]}
                                // Mark a couple of days in the next 1-2 weeks as "available"
                                availableDates={[
                                    addDays(new Date(), 7),
                                    addDays(new Date(), 10),
                                ]}
                            />



                        </div>

                        {/* Show the selected date (or range) below the calendar */}
                        <div className="mt-1 text-center">

                            <>
                                <p className="text-lg text-green-800 font-bold mb-1" style={{ fontSize: `${useResponsiveSize(0.75, 1.05)}rem`, fontWeight: 600 }}>
                                    {singleDate?.toLocaleDateString()}
                                </p>
                                <p className="text-sm" style={{ fontSize: `${useResponsiveSize(0.75, 1.15)}rem`, fontWeight: 600 }}>Your Selected Cargo Ready Date</p>
                            </>


                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <DataChartDesktop height="200px" actionFlag={"active_purchase_order"} customStyle={{ boxShadow: theme.baseShadows.cardWithSpread }} customContainerStyle={{ width: '80%' }} />
                    </div>

                    {/* Footer with Confirm/Cancel */}
                    <div className="flex gap-4 p-4 justify-center">
                        <AcceptRejectButton
                            onApproveClick={() => {
                                console.log("Approved!")
                            }}
                            onRejectClick={() => {
                                console.log("Rejected!")
                            }}

                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
