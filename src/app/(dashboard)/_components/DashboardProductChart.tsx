"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

// ✅ Fixed colors (valid CSS variables or HEX codes)
const chartData = [
  { browser: "chrome", visitors: 275, fill: "#2695FF" },
  { browser: "safari", visitors: 200, fill: "#590000" },
  { browser: "firefox", visitors: 187, fill: "#FFD700" },
  { browser: "edge", visitors: 173, fill: "#0E3A18" },
  { browser: "other", visitors: 90, fill: "#FF5733" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "#2695FF",
  },
  safari: {
    label: "Safari",
    color: "#590000",
  },
  firefox: {
    label: "Firefox",
    color: "#FFD700",
  },
  edge: {
    label: "Edge",
    color: "#0E3A18",
  },
  other: {
    label: "Other",
    color: "#FF5733",
  },
} satisfies ChartConfig;

export function DashboardProductChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-start pb-0 mb-5">
        <CardTitle className="text-[32px] font-semibold leading-[120%]">Most Product</CardTitle>
        <CardDescription className="text-base leading-[120%] font-normal text-black">Most bookings in the Category?</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 h-[487px] w-full">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={70}
              outerRadius={110}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
