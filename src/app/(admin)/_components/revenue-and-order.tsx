"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "Jan", revenue: 700, sale: 650 },
  { month: "Feb", revenue: 600, sale: 580 },
  { month: "Mar", revenue: 750, sale: 720 },
  { month: "Apr", revenue: 680, sale: 800 },
  { month: "May", revenue: 720, sale: 750 },
  { month: "Jun", revenue: 1240, sale: 700 },
  { month: "Jul", revenue: 800, sale: 680 },
  { month: "Aug", revenue: 750, sale: 720 },
  { month: "Sep", revenue: 900, sale: 650 },
  { month: "Oct", revenue: 650, sale: 800 },
  { month: "Nov", revenue: 700, sale: 750 },
  { month: "Dec", revenue: 780, sale: 720 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#ef4444",
  },
  sale: {
    label: "Sale",
    color: "#3b82f6",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg border">
        <p className="text-xs text-gray-300 mb-1">{label}</p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-white">
              {entry.dataKey === "revenue" ? "Revenue" : "Sale"}:
            </span>
            <span className="font-semibold text-white">
              {entry.dataKey === "revenue"
                ? `${entry.value.toLocaleString()}`
                : `${Math.round((entry.value / 1000) * 100)}%`}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function RevenueOrderChart() {
  return (
    <Card className="w-full ">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Statistic
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Revenue and Order
        </CardDescription>
        <div className="flex items-center justify-end gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <span className="text-sm text-gray-700">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-700">Sale</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-80 w-full">
          <LineChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid
              strokeDasharray="2 2"
              stroke="#e5e7eb"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `$${value / 1000}k`;
                }
                return `$${value}`;
              }}
              domain={[0, 1200]}
              ticks={[0, 200, 400, 600, 800, 1000, 1200]}
            />
            <ChartTooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-revenue)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-revenue)" }}
            />
            <Line
              type="monotone"
              dataKey="sale"
              stroke="var(--color-sale)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: "var(--color-sale)" }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
