"use client";

import React, { useState, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LifeTimeline = () => {
  const [years, setYears] = useState([1990, 2050]);
  const birthYear = years[0];
  const deathYear = years[1];
  const lifespan = deathYear - birthYear;

  const data = useMemo(() => {
    return Array.from({ length: lifespan + 1 }, (_, index) => {
      const year = birthYear + index;
      const age = index;
      return {
        year,
        Energy: Math.max(10, 100 - (age * 100) / lifespan),
        "Free Time": age < 20 ? 80 : age < 40 ? 60 : 30,
        Financial: age < 30 ? 30 : age < 50 ? 70 : 90,
      };
    });
  }, [birthYear, deathYear]);

  const getWidth = () => {
    const diffPercentage = ((deathYear - birthYear) * 100) / 150;
    return `${diffPercentage}%`;
  };

  const getLeftMargin = () => {
    const leftMarginPercentage = ((birthYear - 1950) * 100) / 150;
    return `${leftMarginPercentage}%`;
  };

  return (
    <div className="relative w-full rounded-lg bg-white">
      <div className="flex items-center mt-2">
        {/* Birth label */}
        <div className="w-16 text-center">
          <span className="font-regular text-gray-800 text-sm">Birth</span>
          <div className="text-gray-800 text-sm">{birthYear}</div>
        </div>

        {/* Timeline container */}
        <div className="flex-1 relative">
          {/* Graph positioned inside the slider area */}
          <div className="absolute inset-0 -mt-12  py-2 ">
            <ResponsiveContainer
              width={getWidth()}
              height="100%"
              style={{
                marginLeft: getLeftMargin(),
              }}
            >
              <BarChart data={data} stackOffset="none" barSize={4}>
                <XAxis dataKey="year" hide={true} />
                <YAxis hide={true} />
                <Tooltip
                  formatter={(value, name) => [
                    `${Number(value).toFixed(0)}%`,
                    name,
                  ]}
                  labelFormatter={(year) =>
                    `Year: ${year} (Age: ${year - birthYear})`
                  }
                  cursor={{ fill: "rgba(0,0,0,0.1)" }}
                  position={{ y: -150 }}
                  contentStyle={{
                    borderRadius: 8,
                    fontSize: 14,
                    backgroundColor: "#eee",
                  }}
                />
                <Bar dataKey="Energy" stackId="a" fill="#608ec2" />
                <Bar dataKey="Free Time" stackId="a" fill="#a26942" />
                <Bar dataKey="Financial" stackId="a" fill="#7fbf3a" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Multi-range slider */}
          <Slider
            defaultValue={years}
            value={years}
            min={1950}
            max={2100}
            step={1}
            className="w-full"
            onValueChange={(value) => {
              if (value[0] < value[1] - 1) {
                setYears(value);
              }
            }}
          />
        </div>

        {/* Death label */}
        <div className="w-16 text-center">
          <span className="font-regular text-gray-950 text-sm">Death</span>
          <div className="text-gray-700 text-sm">{deathYear}</div>
        </div>
      </div>
      {/* Stats summary */}
      {/* <div className="mt-6 w-full flex justify-between text-center">
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 mx-2">
          <p className="text-gray-500">Lifespan</p>
          <p className="text-2xl font-bold">{lifespan} years</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 mx-2">
          <p className="text-gray-500">Current Age</p>
          <p className="text-2xl font-bold">
            {new Date().getFullYear() - birthYear}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md flex-1 mx-2">
          <p className="text-gray-500">Years Left</p>
          <p className="text-2xl font-bold">
            {deathYear - new Date().getFullYear()}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default LifeTimeline;
