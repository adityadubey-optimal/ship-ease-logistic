import React from "react";
import { useTheme } from "../../context/ThemeContext";
import {
    Bar,
    BarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";



interface ChartDataPoint {
    date: string;
    daysRemaining: string;
    value: number;
    maxValue: number;
}

interface ProgressChartProps {
    data: ChartDataPoint[];
    height: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data, height }) => {
    const { theme } = useTheme();


    // Dynamically adjust bar size and margins for mobile
    const barSize = 30
    const barGap = 4
    const chartMargin =
        { top: 20, right: 10, bottom: 40, left: 20 }


    // Optionally reduce the corner radius on mobile
    const barRadius = 10

    const CustomBar = (props: any) => {
        const { x, y, width, height, payload } = props;
        const fullHeight = height;
        const progressHeight = (payload.value / payload.maxValue) * height;

        return (
            <g>
                {/* Background bar */}
                <path
                    d={`
            M ${x},${y + barRadius}
            A ${barRadius},${barRadius} 0 0 1 ${x + barRadius},${y}
            L ${x + width - barRadius},${y}
            A ${barRadius},${barRadius} 0 0 1 ${x + width},${y + barRadius}
            L ${x + width},${y + fullHeight - barRadius}
            A ${barRadius},${barRadius} 0 0 1 ${x + width - barRadius},${y + fullHeight}
            L ${x + barRadius},${y + fullHeight}
            A ${barRadius},${barRadius} 0 0 1 ${x},${y + fullHeight - barRadius}
            Z
          `}
                    fill="#E2E2FC"
                />
                {/* Progress bar */}
                <path
                    d={`
            M ${x},${y + fullHeight - progressHeight + barRadius}
            A ${barRadius},${barRadius} 0 0 1 ${x + barRadius},${y + fullHeight - progressHeight}
            L ${x + width - barRadius},${y + fullHeight - progressHeight}
            A ${barRadius},${barRadius} 0 0 1 ${x + width},${y + fullHeight - progressHeight + barRadius}
            L ${x + width},${y + fullHeight - barRadius}
            A ${barRadius},${barRadius} 0 0 1 ${x + width - barRadius},${y + fullHeight}
            L ${x + barRadius},${y + fullHeight}
            A ${barRadius},${barRadius} 0 0 1 ${x},${y + fullHeight - barRadius}
            Z
          `}
                    fill={theme.colors.success}
                />
            </g>
        );
    };

    return (
        <div
            className="w-full p-2 rounded-lg"
            style={{
                backgroundColor: "#ffffff",
                borderRadius: theme.borderRadius.borderRadius,
                minHeight: `${height}px`,
            }}
        >
            <ResponsiveContainer width="100%" height={height}>
                <BarChart data={data} margin={chartMargin} barSize={barSize} barGap={barGap}>
                    <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        strokeDasharray="3 3"
                        stroke="#1E1E1E20"
                    />
                    <XAxis
                        dataKey="date"
                        axisLine={{ stroke: "#1E1E1E" }}
                        tickLine={false}
                        interval={0}
                        height={40}
                        padding={{ left: 20, right: 20 }}
                        tick={(props) => {
                            const index = props.index ?? 0;
                            return (
                                <g transform={`translate(${props.x},${props.y})`}>
                                    <text
                                        x={0}
                                        y={0}
                                        dy={14}
                                        textAnchor="middle"
                                        fill="#1E1E1E"
                                        style={{
                                            fontSize: "10px",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {data[index].date}
                                    </text>
                                    <text
                                        x={0}
                                        y={16}
                                        dy={14}
                                        textAnchor="middle"
                                        fill="#666666"
                                        style={{
                                            fontSize: "10px",
                                            fontWeight: 400,
                                        }}
                                    >
                                        {data[index].daysRemaining}
                                    </text>
                                </g>
                            );
                        }}
                    />
                    <YAxis
                        axisLine={{ stroke: "#1E1E1E" }}
                        tickLine={false}
                        tick={{
                            fill: "#1E1E1E",
                            fontSize: 10,
                            fontWeight: 500,
                        }}
                        domain={[-50, 1000]}
                        tickFormatter={(value) =>
                            value < 0 ? "" : value === 1000 ? "1000+" : value.toString()
                        }
                        tickMargin={8}
                        width={30}
                    />
                    <Bar dataKey="maxValue" shape={<CustomBar />} isAnimationActive={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProgressChart;