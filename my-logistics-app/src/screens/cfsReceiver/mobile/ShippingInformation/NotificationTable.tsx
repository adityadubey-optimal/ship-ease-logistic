"use client"

import { useTheme } from "@/context/ThemeContext"

interface NotificationItem {
    date: string
    notification: string
    user: string
}

interface NotificationTableProps {
    data?: NotificationItem[]
    headerLabels?: {
        date?: string
        notification?: string
        user?: string
    }
    styles?: {
        containerBackground?: string
        rowBackground?: string
        alternateRowBackground?: string
        separatorColor?: string
        fontSize?: {
            header?: string
            cell?: string
        }
        fontWeight?: {
            header?: string
            cell?: string
        }
        textColor?: {
            header?: string
            cell?: string
        }
        padding?: {
            container?: string
            header?: string
            cell?: string
        }
        borderRadius?: string
        showSeparators?: boolean
        columnWidths?: {
            date?: string
            notification?: string
            user?: string
        }
    }
}

const defaultStyles = {
    containerBackground: "white",
    rowBackground: "white",
    alternateRowBackground: "white",
    separatorColor: "#E5E7EB",
    fontSize: {
        header: "1.125rem",
        cell: "1rem",
    },
    fontWeight: {
        header: "600",
        cell: "400",
    },
    textColor: {
        header: "#1E1E1E",
        cell: "#1E1E1E",
    },
    padding: {
        container: "0",
        header: "1.25rem 1rem",
        cell: "1.25rem 1rem",
    },
    borderRadius: "0.5rem",
    showSeparators: true,
    columnWidths: {
        date: "25%",
        notification: "50%",
        user: "25%",
    },
}

export default function NotificationTable({
    data = [
        { date: "13.02.2025", notification: "PO Updated to AIR", user: "Buyer" },
        { date: "13.02.2025", notification: "Quantity Updated", user: "Buyer" },
    ],
    headerLabels = {
        date: "Date",
        notification: "Notification",
        user: "User",
    },
    styles = {},
}: NotificationTableProps) {
    const { theme } = useTheme()

    const mergedStyles = {
        ...defaultStyles,
        ...styles,
        fontSize: { ...defaultStyles.fontSize, ...styles.fontSize },
        fontWeight: { ...defaultStyles.fontWeight, ...styles.fontWeight },
        textColor: { ...defaultStyles.textColor, ...styles.textColor },
        padding: { ...defaultStyles.padding, ...styles.padding },
        columnWidths: { ...defaultStyles.columnWidths, ...styles.columnWidths },
    }

    return (
        <div
            style={{
                backgroundColor: mergedStyles.containerBackground,
                borderRadius: mergedStyles.borderRadius,
                padding: mergedStyles.padding.container,
                width: "100%",
                overflow: "auto",
                fontFamily: theme.fonts.family,
                boxShadow: '0px 10px 15px 5px rgba(0, 0, 0, 0.15)',
                height: '400px'
            }}
        >
            <table className="w-full border-collapse">
                <thead style={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: mergedStyles.containerBackground,
                    zIndex: 1,
                }}>
                    <tr>
                        <th
                            style={{
                                width: mergedStyles.columnWidths.date,
                                padding: mergedStyles.padding.header,
                                textAlign: "left",
                                fontSize: mergedStyles.fontSize.header,
                                fontWeight: mergedStyles.fontWeight.header,
                                color: mergedStyles.textColor.header,
                            }}
                        >
                            {headerLabels.date}
                        </th>
                        <th
                            style={{
                                width: mergedStyles.columnWidths.notification,
                                padding: mergedStyles.padding.header,
                                textAlign: "left",
                                fontSize: mergedStyles.fontSize.header,
                                fontWeight: mergedStyles.fontWeight.header,
                                color: mergedStyles.textColor.header,
                            }}
                        >
                            {headerLabels.notification}
                        </th>
                        <th
                            style={{
                                width: mergedStyles.columnWidths.user,
                                padding: mergedStyles.padding.header,
                                textAlign: "left",
                                fontSize: mergedStyles.fontSize.header,
                                fontWeight: mergedStyles.fontWeight.header,
                                color: mergedStyles.textColor.header,
                            }}
                        >
                            {headerLabels.user}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor: index % 2 === 0 ? mergedStyles.rowBackground : mergedStyles.alternateRowBackground,
                                borderBottom: mergedStyles.showSeparators ? `1px solid ${mergedStyles.separatorColor}` : "none",
                            }}
                        >
                            <td
                                style={{
                                    padding: mergedStyles.padding.cell,
                                    fontSize: mergedStyles.fontSize.cell,
                                    fontWeight: mergedStyles.fontWeight.cell,
                                    color: mergedStyles.textColor.cell,
                                }}
                            >
                                {item.date}
                            </td>
                            <td
                                style={{
                                    padding: mergedStyles.padding.cell,
                                    fontSize: mergedStyles.fontSize.cell,
                                    fontWeight: mergedStyles.fontWeight.cell,
                                    color: mergedStyles.textColor.cell,
                                }}
                            >
                                {item.notification}
                            </td>
                            <td
                                style={{
                                    padding: mergedStyles.padding.cell,
                                    fontSize: mergedStyles.fontSize.cell,
                                    fontWeight: mergedStyles.fontWeight.cell,
                                    color: mergedStyles.textColor.cell,
                                }}
                            >
                                {item.user}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

