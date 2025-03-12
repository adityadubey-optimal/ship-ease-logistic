import type { DateRange } from "react-day-picker"
import type { Theme } from "@/theme/calendertheme"

export type SelectionMode = "single" | "range"

export interface CalendarProps {
    mode: SelectionMode
    selected: Date | DateRange | undefined
    onSelect: (date: Date | DateRange | undefined) => void
    availableDates: Date[]
    blockedDates: Date[]
    minDate?: Date
    maxDate?: Date
    className?: string
    customTheme?: Partial<Theme>
}

export interface CargoDateCalendarProps {
    mode: SelectionMode
    selected: Date | DateRange | undefined
    onSelect: (date: Date | DateRange | undefined) => void
    availableDates: Date[]
    blockedDates: Date[]
    customTheme?: Partial<Theme>
}

export interface CargoDateModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (date: Date | DateRange | undefined) => void
    poNumber: string
    mode: SelectionMode
    availableDates: Date[]
    blockedDates: Date[]
    customTheme?: Partial<Theme>
}

