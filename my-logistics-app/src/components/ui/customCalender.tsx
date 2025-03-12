"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CustomCalendarProps {
    shipByDate: string
    onShipByDateChange?: (date: string) => void
    availableDates?: Date[]
    blockedDates?: Date[]
    onSelect?: (date: Date) => void
    selectedDate?: Date
}

const styles = {
    container: {
        backgroundColor: "#F3F0FF",
        borderRadius: "16px",
        padding: "20px",
        width: "360px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        color: "#1a1a1a",
        fontSize: "16px",
    },
    monthSelector: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
    },
    monthText: {
        fontSize: "16px",
        fontWeight: 500,
        color: "#1a1a1a",
    },
    weekDays: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        textAlign: "center" as const,
        marginBottom: "10px",
        color: "#4B5563",
        fontSize: "14px",
    },
    daysGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "4px",
    },
    day: {
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
    },
    availableDay: {
        backgroundColor: "#BBF7D0",
        color: "#166534",
    },
    blockedDay: {
        backgroundColor: "#FECACA",
        color: "#991B1B",
    },
    currentDay: {
        border: "2px solid #6366F1",
        borderRadius: "50%",
    },
    legend: {
        display: "flex",
        gap: "16px",
        marginTop: "20px",
        fontSize: "14px",
        color: "#4B5563",
    },
    legendItem: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    legendBox: {
        width: "16px",
        height: "16px",
        borderRadius: "4px",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        gap: "12px",
    },
}

export function CustomCalendar({
    shipByDate,
    onShipByDateChange,
    availableDates = [],
    blockedDates = [],
    onSelect,
    selectedDate,
}: CustomCalendarProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date())

    const isToday = (date: Date) => {
        const today = new Date()
        return date.toDateString() === today.toDateString()
    }

    const isAvailable = (date: Date) => {
        return availableDates.some((d) => d.toDateString() === date.toDateString())
    }

    const isBlocked = (date: Date) => {
        return blockedDates.some((d) => d.toDateString() === date.toDateString())
    }

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear()
        const month = date.getMonth()
        const days = []
        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)

        for (let i = 0; i < firstDay.getDay(); i++) {
            days.push(null)
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i))
        }

        return days
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <span>For Ship-by-Date {shipByDate}</span>
                {/* <Button variant="ghost" size="icon" onClick={() => onShipByDateChange?.(shipByDate)}>
                    <Pencil className="h-4 w-4" />
                </Button> */}
            </div>

            <div style={styles.monthSelector}>
                <span style={styles.monthText}>
                    {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                </span>
                <div className="flex gap-1">
                    {/* <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button> */}
                </div>
            </div>

            <div style={styles.weekDays}>
                {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                    <div key={day}>{day}</div>
                ))}
            </div>

            <div style={styles.daysGrid}>
                {getDaysInMonth(currentDate).map((date, i) => {
                    if (!date) return <div key={`empty-${i}`} />

                    const dayStyle = {
                        ...styles.day,
                        ...(isAvailable(date) ? styles.availableDay : {}),
                        ...(isBlocked(date) ? styles.blockedDay : {}),
                        ...(isToday(date) ? styles.currentDay : {}),
                    }

                    return (
                        <div key={date.toISOString()} style={dayStyle} onClick={() => !isBlocked(date) && onSelect?.(date)}>
                            {date.getDate()}
                        </div>
                    )
                })}
            </div>

            <div style={styles.legend}>
                <div style={styles.legendItem}>
                    <div style={{ ...styles.legendBox, backgroundColor: "#FECACA" }} />
                    <span>Cargo date not available</span>
                </div>
                <div style={styles.legendItem}>
                    <div style={{ ...styles.legendBox, backgroundColor: "#BBF7D0" }} />
                    <span>Available dates</span>
                </div>
            </div>

            <div style={styles.buttons}>
                {/* <Button variant="outline" className="flex-1">
                    Cancel
                </Button> */}
                <Button className="flex-1">OK</Button>
            </div>
        </div>
    )
}

