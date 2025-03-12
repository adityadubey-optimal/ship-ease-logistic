

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function MyCalendarPage() {
    // Example: single date selection
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    // Some dates are “blocked”
    const blockedDates = [
        new Date(2025, 1, 10),
        new Date(2025, 1, 15),
        new Date(2025, 1, 23),
    ]

    // Some dates are “available” (if you want to only allow certain days)
    // If “availableDates” is empty, we allow all except blocked
    const availableDates = [
        new Date(2025, 1, 5),
        new Date(2025, 1, 6),
        new Date(2025, 1, 7),
        new Date(2025, 1, 8),
        // ...
    ]

    return (
        <div>
            <h1>My Calendar Demo</h1>
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(val) => {
                    if (val instanceof Date) {
                        setSelectedDate(val)
                    }
                }}
                availableDates={availableDates}
                blockedDates={blockedDates}
                className="my-4"
            />

            <p>Selected Date: {selectedDate?.toLocaleDateString() ?? "None"}</p>
        </div>
    )
}