import { useTheme } from "@/context/ThemeContext"
import ProgressChart from "../ui/progressChartMobile"



export default function DataChartDesktop() {




    const { theme } = useTheme()



    const sampleData = [
        { date: "21 Feb", daysRemaining: "-11 Days", value: 200, maxValue: 1000 },
        { date: "22 Feb", daysRemaining: "-10 Days", value: 200, maxValue: 1000 },
        { date: "23 Feb", daysRemaining: "-9 Days", value: 250, maxValue: 1000 },
        { date: "24 Feb", daysRemaining: "-8 Days", value: 350, maxValue: 1000 },
        { date: "25 Feb", daysRemaining: "-7 Days", value: 400, maxValue: 1000 },
        { date: "26 Feb", daysRemaining: "-6 Days", value: 450, maxValue: 1000 },
    ]

    // Example of custom axis configuration
    const customAxisConfig = {
        xAxis: {
            fontSize: "14px",
            fontWeight: "600",
            dateColor: "#1E1E1E",
            daysColor: "#666666",
            showBorder: true,
            borderColor: "#E0E0E0",
        },
        yAxis: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#1E1E1E",
            showBorder: true,
            borderColor: "#E0E0E0",
        },
    }


    return (
        <section className="mb-8 max-w-7xl mx-auto p-1" style={{ background: theme.colors.thertiary }}>

            <div className="w-full max-w-4xl mx-auto">
                <ProgressChart data={sampleData} height={500} />
            </div>
        </section>
    )
}