"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "June", desktop: 214, mobile: 140 },
  
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#EF1A26", // red
  },
  mobile: {
    label: "Mobile",
    color: "#1A6BEF", // blue
  },
};

export function DashboardStatisticChart() {
  return (
   <Card className="bg-white rounded-lg">
  <CardHeader className="mb-4 px-6 pt-6 pb-2">
    <CardTitle className="text-[32px] font-semibold leading-tight">
      Statistic
    </CardTitle>
    <CardDescription className="text-sm text-gray-600">
      Revenue and Order
    </CardDescription>
  </CardHeader>

  <CardContent className="h-[477px] px-6 pb-6">
    <ChartContainer config={chartConfig} className="h-full w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ top: 12, right: 20, bottom: 12, left: 0 }}
        className="h-full"
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Line
          dataKey="desktop"
          type="monotone"
          stroke={chartConfig.desktop.color}
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="mobile"
          type="monotone"
          stroke={chartConfig.mobile.color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  </CardContent>
</Card>

  );
}
