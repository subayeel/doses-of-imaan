"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  Line,
  LineChart,
  ComposedChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// World religions data from 1500-2020
const religionsData = [
  {
    year: 1500,
    totalPopulation: 461000000,
    christianity: 76000000,
    islam: 50000000,
    hinduism: 80000000,
    buddhism: 25000000,
    judaism: 1500000,
  },
  {
    year: 1550,
    totalPopulation: 493000000,
    christianity: 91000000,
    islam: 60000000,
    hinduism: 85000000,
    buddhism: 27000000,
    judaism: 1700000,
  },
  {
    year: 1600,
    totalPopulation: 554000000,
    christianity: 104000000,
    islam: 68000000,
    hinduism: 90000000,
    buddhism: 30000000,
    judaism: 1800000,
  },
  {
    year: 1650,
    totalPopulation: 578000000,
    christianity: 115000000,
    islam: 77000000,
    hinduism: 100000000,
    buddhism: 32000000,
    judaism: 1700000,
  },
  {
    year: 1700,
    totalPopulation: 603000000,
    christianity: 126000000,
    islam: 86000000,
    hinduism: 110000000,
    buddhism: 34000000,
    judaism: 2000000,
  },
  {
    year: 1750,
    totalPopulation: 770000000,
    christianity: 155000000,
    islam: 95000000,
    hinduism: 130000000,
    buddhism: 37000000,
    judaism: 2500000,
  },
  {
    year: 1800,
    totalPopulation: 980000000,
    christianity: 205000000,
    islam: 106000000,
    hinduism: 180000000,
    buddhism: 40000000,
    judaism: 3000000,
  },
  {
    year: 1850,
    totalPopulation: 1240000000,
    christianity: 302000000,
    islam: 130000000,
    hinduism: 220000000,
    buddhism: 45000000,
    judaism: 4800000,
  },
  {
    year: 1900,
    totalPopulation: 1650000000,
    christianity: 558000000,
    islam: 200000000,
    hinduism: 250000000,
    buddhism: 127000000,
    judaism: 9000000,
  },
  {
    year: 1950,
    totalPopulation: 2525000000,
    christianity: 817000000,
    islam: 317000000,
    hinduism: 350000000,
    buddhism: 180000000,
    judaism: 11000000,
  },
  {
    year: 2000,
    totalPopulation: 6070000000,
    christianity: 1985000000,
    islam: 1226000000,
    hinduism: 811000000,
    buddhism: 360000000,
    judaism: 14200000,
    atheism: 151000000,
  },
  {
    year: 2010,
    totalPopulation: 6896000000,
    christianity: 2168000000,
    islam: 1599700000,
    hinduism: 1032000000,
    buddhism: 487000000,
    judaism: 13860000,

    muslimPercentage: 23.2,
  },
  {
    year: 2020,
    totalPopulation: 7794000000,
    christianity: 2382000000,
    islam: 1907110000,
    hinduism: 1161000000,
    buddhism: 506000000,
    judaism: 14700000,

    otherReligions: 1372300000,
    muslimPercentage: 24.9,
  },
  // Future projections from the image
  {
    year: 2030,
    islam: 2209270000,
    muslimPercentage: 26.5,
    projected: true,
  },
  {
    year: 2040,
    islam: 2497830000,
    muslimPercentage: 28.1,
    projected: true,
  },
  {
    year: 2050,
    islam: 2761480000,
    muslimPercentage: 29.7,
    projected: true,
  },
];

const chartConfig = {
  christianity: {
    label: "Christianity",
    color: "hsl(var(--chart-1))",
  },
  islam: {
    label: "Islam",
    color: "hsl(var(--chart-2))",
  },
  hinduism: {
    label: "Hinduism",
    color: "hsl(var(--chart-3))",
  },
  buddhism: {
    label: "Buddhism",
    color: "hsl(var(--chart-4))",
  },
  judaism: {
    label: "Judaism",
    color: "hsl(var(--chart-5))",
  },
  muslimPercentage: {
    label: "Muslim % of World Population",
    color: "hsl(var(--chart-8))",
  },
} satisfies ChartConfig;

// Calculate growth rates
const calculateGrowthRate = () => {
  const latestActualData = religionsData.filter((d) => !d.projected)[
    religionsData.filter((d) => !d.projected).length - 1
  ];
  const previousActualData = religionsData.filter((d) => !d.projected)[
    religionsData.filter((d) => !d.projected).length - 2
  ];
  const projectedData2050 = religionsData[religionsData.length - 1];

  const totalGrowth =
    ((latestActualData.totalPopulation - previousActualData.totalPopulation) /
      previousActualData.totalPopulation) *
    100;

  const muslimGrowth2020to2050 =
    ((projectedData2050.islam - latestActualData.islam) /
      latestActualData.islam) *
    100;

  const fastestGrowingReligion = Object.entries(chartConfig)
    .map(([key, config]) => {
      if (key === "totalPopulation" || key === "muslimPercentage")
        return { name: config.label, growth: 0 };
      const growth =
        ((latestActualData[key] - previousActualData[key]) /
          previousActualData[key]) *
        100;
      return { name: config.label, growth };
    })
    .sort((a, b) => b.growth - a.growth)[0];

  return {
    totalGrowth: totalGrowth.toFixed(1),
    fastestGrowing: fastestGrowingReligion,
    muslimGrowth2020to2050: muslimGrowth2020to2050.toFixed(1),
    muslimPercentageGrowth: (
      projectedData2050.muslimPercentage - latestActualData.muslimPercentage
    ).toFixed(1),
  };
};

const { totalGrowth, fastestGrowing } = calculateGrowthRate();

// Filter data for Muslim projection chart
const muslimProjectionData = religionsData.filter(
  (d) => d.year >= 2010 && (d.islam || d.muslimPercentage)
);

export function ReligionsGrowth() {
  return (
    <Card className="w-full overflow-x-auto">
      <CardHeader>
        <CardTitle>World Religions Growth (1500-2050)</CardTitle>
        <CardDescription>
          Population distribution by major religions with Muslim population
          projections to 2050
        </CardDescription>
      </CardHeader>
      <div className="px-6">
        <Tabs defaultValue="historical">
          <TabsList className="mb-4">
            <TabsTrigger value="historical">Historical Data</TabsTrigger>
            <TabsTrigger value="muslim-projection">
              Muslim Projections
            </TabsTrigger>
          </TabsList>

          <TabsContent value="historical">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={religionsData.filter((d) => !d.projected)}
                  stackOffset="expand"
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    tickFormatter={(value) => `${Math.floor(value * 100)}%`}
                    tickLine={false}
                    axisLine={false}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        // formatter={(value, name) => {
                        //   const dataPoint = religionsData.find(
                        //     (d) => d.year === name
                        //   );
                        //   if (!dataPoint) return [0, ""];
                        //   const percentage = (
                        //     (value / dataPoint.totalPopulation) *
                        //     100
                        //   ).toFixed(1);
                        //   return [
                        //     `${value.toLocaleString()} (${percentage}%)`,
                        //     "Population",
                        //   ];
                        // }}
                      />
                    }
                  />
                  <Legend />

                  <Area
                    dataKey="islam"
                    type="monotone"
                    fill="var(--color-islam)"
                    fillOpacity={0.6}
                    stroke="var(--color-islam)"
                    stackId="a"
                  />
                  <Area
                    dataKey="christianity"
                    type="monotone"
                    fill="var(--color-christianity)"
                    fillOpacity={0.6}
                    stroke="var(--color-christianity)"
                    stackId="a"
                  />
                  <Area
                    dataKey="judaism"
                    type="monotone"
                    fill="var(--color-judaism)"
                    fillOpacity={0.6}
                    stroke="var(--color-judaism)"
                    stackId="a"
                  />
                  <Area
                    dataKey="buddhism"
                    type="monotone"
                    fill="var(--color-buddhism)"
                    fillOpacity={0.6}
                    stroke="var(--color-buddhism)"
                    stackId="a"
                  />
                  <Area
                    dataKey="hinduism"
                    type="monotone"
                    fill="var(--color-hinduism)"
                    fillOpacity={0.6}
                    stroke="var(--color-hinduism)"
                    stackId="a"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>

          <TabsContent value="muslim-projection">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={muslimProjectionData}
                  margin={{
                    left: 12,
                    right: 12,
                    top: 20,
                    bottom: 10,
                  }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="year"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    yAxisId="left"
                    tickFormatter={(value) =>
                      `${(value / 1000000000).toFixed(1)}B`
                    }
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    domain={[0, 3000000000]}
                    label={{
                      value: "Population",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tickFormatter={(value) => `${value}%`}
                    domain={[0, 40]}
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    label={{
                      value: "% of World Population",
                      angle: 90,
                      position: "insideRight",
                    }}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        indicator="line"
                        formatter={(value, name) => {
                          if (name === "muslimPercentage") {
                            return [`${value}%`, "% of World Population"];
                          }
                          return [value.toLocaleString(), "Population"];
                        }}
                      />
                    }
                  />
                  <Legend />
                  <Area
                    yAxisId="left"
                    dataKey="islam"
                    type="monotone"
                    fill="var(--color-islam)"
                    fillOpacity={0.6}
                    stroke="var(--color-islam)"
                    name="Muslim Population"
                    strokeWidth={2}
                  />
                  <Line
                    yAxisId="right"
                    dataKey="muslimPercentage"
                    type="monotone"
                    stroke="var(--color-muslimPercentage)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </TabsContent>
        </Tabs>
      </div>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            World population grew by {totalGrowth}% from 2010-2020{" "}
            <TrendingUp className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-2 leading-none text-muted-foreground">
            {fastestGrowing.name} had the fastest growth at{" "}
            {fastestGrowing.growth.toFixed(1)}%
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
