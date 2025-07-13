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
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Blazer Outfits", value: 20, fill: "#ef4444" },
  { name: "Shirt Outfits", value: 18, fill: "#7c2d12" },
  { name: "Pants Outfits", value: 22, fill: "#3b82f6" },
  { name: "Shoes Outfits", value: 15, fill: "#1e293b" },
  { name: "Coats & Jackets Outfits", value: 12, fill: "#eab308" },
  { name: "Suit Outfits", value: 13, fill: "#166534" },
];

const chartConfig = {
  blazer: {
    label: "Blazer Outfits",
    color: "#ef4444",
  },
  shirt: {
    label: "Shirt Outfits",
    color: "#7c2d12",
  },
  pants: {
    label: "Pants Outfits",
    color: "#3b82f6",
  },
  shoes: {
    label: "Shoes Outfits",
    color: "#1e293b",
  },
  coats: {
    label: "Coats & Jackets Outfits",
    color: "#eab308",
  },
  suit: {
    label: "Suit Outfits",
    color: "#166534",
  },
} satisfies ChartConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-lg">
        <div className="flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: data.payload.fill }}
          />
          <span className="text-sm font-medium text-gray-900">{data.name}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{data.value}%</p>
      </div>
    );
  }
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const renderCustomizedLabel = ({ cx, cy }: any) => {
  return (
    <text
      x={cx}
      y={cy}
      fill="#1f2937"
      textAnchor="middle"
      dominantBaseline="central"
      className="text-2xl font-bold"
    >
      20.00%
    </text>
  );
};

export default function MostProductChart() {
  return (
    <Card className="w-full ">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-gray-900">
          Most Product
        </CardTitle>
        <CardDescription className="text-sm text-gray-600">
          Most bookings in the Category?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                innerRadius={50}
                fill="#8884d8"
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <ChartTooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>

        {/* Legend */}
        <div className="grid grid-cols-2 gap-2 mt-6">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-xs text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
