

"use client"

import * as React from "react"
import { addDays, subMonths, addMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { borderRadius } from "@/theme/base"
import { useTheme } from "@/context/ThemeContext"

/** For "range" mode, we store { from?: Date; to?: Date } in `selected`. */
export type SelectionValue =
  | Date
  | { from?: Date; to?: Date }
  | undefined

export interface CalendarProps {
  /** "single" for single-date selection, "range" for date-range. */
  mode?: "single" | "range"
  /** The currently selected value. If single, it's a `Date`; if range, it's an object { from?: Date; to?: Date }. */
  selected?: SelectionValue
  /** Called when the user picks a date (single) or date range (range). */
  onSelect?: (value: SelectionValue) => void

  /** If not empty, only these dates are enabled. Others are disabled. */
  availableDates?: Date[]
  /** These dates are always blocked (disabled). */
  blockedDates?: Date[]

  /** Optional: add custom CSS classes. */
  className?: string
  /** Optional: if you want a default initial month to display. */
  initialMonth?: Date
}

/**
 * A custom Calendar that handles single or range selection:
 * - We track the "view month" (initially either `initialMonth` or the selected date's month).
 * - We generate a grid of days for that month (including leading/trailing days for alignment).
 * - We style each day based on:
 *    - Is it selected? (single or in the selected range)
 *    - Is it blocked or not in availableDates?
 *    - Is it "today"?
 * - We do NOT use "modifiers"/"modifiersStyles" from older `react-day-picker`; we simply handle styling ourselves.
 */
export function Calendar({
  mode = "single",
  selected,
  onSelect,
  availableDates = [],
  blockedDates = [],
  className,
  initialMonth,
}: CalendarProps) {
  const { theme } = useTheme()
  // Compute an initial "viewDate" (the month we show)
  const initialViewDate = React.useMemo(() => {
    // If a single date was selected, open that month
    if (mode === "single" && selected instanceof Date) {
      return new Date(selected.getFullYear(), selected.getMonth(), 1)
    }
    // If range has a 'from' date, we can open that month
    if (mode === "range" && selected && "from" in selected && selected.from) {
      return new Date(selected.from.getFullYear(), selected.from.getMonth(), 1)
    }
    // Otherwise, if user passed an initialMonth, use that
    if (initialMonth) {
      return new Date(initialMonth.getFullYear(), initialMonth.getMonth(), 1)
    }
    // fallback: current month
    return new Date()
  }, [mode, selected, initialMonth])

  const [viewDate, setViewDate] = React.useState(initialViewDate)
  // For range mode: track "rangeStart" when the user first clicks
  const [rangeStart, setRangeStart] = React.useState<Date | null>(null)

  // Helper: compare day ignoring time
  function isSameDay(d1: Date, d2: Date) {
    return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
    )
  }

  // Is this day selected?
  function isDaySelected(day: Date) {
    if (!selected) return false
    if (mode === "single") {
      return selected instanceof Date && isSameDay(day, selected)
    } else {
      // range
      const r = selected as { from?: Date; to?: Date }
      if (!r.from || !r.to) return false
      return day >= r.from && day <= r.to
    }
  }

  // Is this day "today"?
  function isToday(day: Date) {
    const now = new Date()
    return isSameDay(day, now)
  }
  console.log('availableDates', availableDates)
  console.log('blockedDates', blockedDates)

  // Helper check: is day in blockedDates?
  function isBlocked(day: Date) {
    return blockedDates.some((b) => isSameDay(b, day))
  }

  // Helper check: is day in availableDates?
  function isAvailable(day: Date) {
    return availableDates.some((a) => isSameDay(a, day))
  }


  // user clicked a day
  function handleDayClick(day: Date) {
    if (isBlocked(day)) return  // do nothing

    if (mode === "single") {
      onSelect?.(day)
    } else {
      // range logic
      if (!rangeStart) {
        setRangeStart(day)
        onSelect?.({ from: day, to: day })
      } else {
        const from = day < rangeStart ? day : rangeStart
        const to = day > rangeStart ? day : rangeStart
        setRangeStart(null)
        onSelect?.({ from, to })
      }
    }
  }

  // Return an array of all days (including leading/trailing "blank" days) for "viewDate"
  function getMonthDays(date: Date) {
    // Start from the Sunday of that month’s first row:
    const start = startOfWeek(startOfMonth(date), { weekStartsOn: 0 })
    // End on the Saturday of that month’s last row:
    const end = endOfWeek(endOfMonth(date), { weekStartsOn: 0 })
    const days: Array<Date> = []
    let current = start
    while (current <= end) {
      days.push(current)
      current = addDays(current, 1)
    }
    return days
  }

  const daysToShow = getMonthDays(viewDate)

  // Navigate months
  function goPrevMonth() {
    setViewDate((prev) => subMonths(prev, 1))
  }
  function goNextMonth() {
    setViewDate((prev) => addMonths(prev, 1))
  }

  const monthLabel = viewDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  })

  return (
    <div className={cn("p-4 border rounded-md w-full max-w-md bg-white", className)} style={{ background: theme.colors.calendarBackground, borderRadius: "20px", boxShadow: theme.shadows.cardWithSpread }}>
      {/* Header: month nav */}
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">{monthLabel}</div>
        <div className="flex gap-1">
          <Button variant="ghost" onClick={goPrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" onClick={goNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Day-of-week labels */}
      <div className="grid grid-cols-7 gap-1 text-xs text-center font-medium mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dow) => (
          <div key={dow}>{dow}</div>
        ))}
      </div>

      {/* The days */}
      <div className="grid grid-cols-7 gap-y-2 text-center">


        {daysToShow.map((day) => {
          const outsideMonth = day.getMonth() !== viewDate.getMonth()
          const blocked = isBlocked(day)
          const available = isAvailable(day)
          const selectedDay = isDaySelected(day)
          const today = isToday(day)

          // Base style for the day
          let style: React.CSSProperties = { borderRadius: "15px" }
          const classes = [
            "h-9 w-9 text-sm font-normal rounded-full flex items-center justify-center",
            outsideMonth ? "text-gray-400" : "text-black",
          ]

          // 1) Blocked => #FF4949, not clickable
          if (blocked) {
            style.backgroundColor = theme.colors.calendarBlock
            classes.push("opacity-60", "cursor-not-allowed")
          }
          // 2) Available => #00901F
          else if (available) {
            style.backgroundColor = theme.colors.calendarAvailable
            classes.push("cursor-pointer", "hover:opacity-80")
          }
          // 3) Otherwise => normal, clickable
          else {
            classes.push("cursor-pointer", "hover:bg-gray-100")
          }

          // If selected => highlight (this will override the day color visually)
          if (selectedDay) {
            classes.push("bg-indigo-500", "text-white")
            style = { ...style, color: "black" }
          }

          // If today => ring highlight
          if (today) {
            classes.push("ring-2", "ring-purple-500", "ring-offset-2", "ring-offset-white")
          }

          return (
            <button
              key={day.toISOString()}
              className={cn(classes)}
              onClick={() => handleDayClick(day)}
              disabled={blocked}
              style={style}
            >
              {day.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}