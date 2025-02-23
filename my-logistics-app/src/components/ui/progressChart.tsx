

import type React from "react"
import { useTheme } from "../../context/ThemeContext"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

interface ChartDataPoint {
    date: string
    daysRemaining: string
    value: number
    maxValue: number

}

interface ProgressChartProps {
    data: ChartDataPoint[]
    height: number
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data, height }) => {
    const { theme } = useTheme()

    const CustomBar = (props: any) => {
        const { x, y, width, height, payload } = props
        const radius = 20
        const fullHeight = height
        const progressHeight = (payload.value / payload.maxValue) * height
        return (
            <g>
                {/* Background bar */}
                <path
                    d={`
            M ${x},${y + radius}
            A ${radius},${radius} 0 0 1 ${x + radius},${y}
            L ${x + width - radius},${y}
            A ${radius},${radius} 0 0 1 ${x + width},${y + radius}
            L ${x + width},${y + fullHeight - radius}
            A ${radius},${radius} 0 0 1 ${x + width - radius},${y + fullHeight}
            L ${x + radius},${y + fullHeight}
            A ${radius},${radius} 0 0 1 ${x},${y + fullHeight - radius}
            Z
          `}
                    fill="#E2E2FC"
                />
                {/* Progress bar */}
                <path
                    d={`
            M ${x},${y + fullHeight - progressHeight + radius}
            A ${radius},${radius} 0 0 1 ${x + radius},${y + fullHeight - progressHeight}
            L ${x + width - radius},${y + fullHeight - progressHeight}
            A ${radius},${radius} 0 0 1 ${x + width},${y + fullHeight - progressHeight + radius}
            L ${x + width},${y + fullHeight - radius}
            A ${radius},${radius} 0 0 1 ${x + width - radius},${y + fullHeight}
            L ${x + radius},${y + fullHeight}
            A ${radius},${radius} 0 0 1 ${x},${y + fullHeight - radius}
            Z
          `}
                    fill={theme.colors.success}
                />
            </g>
        )
    }

    return (
        <div className="w-full  p-6 rounded-lg" style={{ backgroundColor: "#ffffff", borderRadius: theme.borderRadius.borderRadius, minHeight: `${height}px` }}>
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data} margin={{ top: 20, right: 20, bottom: 60, left: 60 }} barSize={60} barGap={8}>
                    <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" stroke="#1E1E1E20" />

                    <XAxis
                        dataKey="date"
                        axisLine={{ stroke: "#1E1E1E" }}
                        tickLine={false}
                        interval={0}
                        height={60}
                        padding={{ left: 30, right: 30 }}
                        tick={(props) => (
                            <g transform={`translate(${props.x},${props.y})`}>
                                <text
                                    x={0}
                                    y={0}
                                    dy={16}
                                    textAnchor="middle"
                                    fill="#1E1E1E"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 500,
                                    }}
                                >
                                    {data[props.index].date}
                                </text>
                                <text
                                    x={0}
                                    y={20}
                                    dy={16}
                                    textAnchor="middle"
                                    fill="#666666"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 400,
                                    }}
                                >
                                    {data[props.index].daysRemaining}
                                </text>
                            </g>
                        )}
                    />

                    <YAxis
                        axisLine={{ stroke: "#1E1E1E" }}
                        tickLine={false}
                        tick={{
                            fill: "#1E1E1E",
                            fontSize: "14px",
                            fontWeight: 500,
                        }}
                        // Set the domain to start a bit below 0
                        domain={[-50, 1000]}
                        tickFormatter={(value) => (value < 0 ? "" : (value === 1000 ? "1000+" : value.toString()))}
                        tickMargin={8}
                        width={50}
                    />

                    <Bar dataKey="maxValue" shape={<CustomBar />} isAnimationActive={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ProgressChart