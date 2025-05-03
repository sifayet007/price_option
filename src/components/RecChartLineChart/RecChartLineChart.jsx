import React from "react";
import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const ReaChartLineChat = () => {
  const data = [
    { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Bob", math: 85, physics: 88, chemistry: 80 },
    { id: 3, name: "Charlie", math: 92, physics: 90, chemistry: 89 },
    { id: 4, name: "David", math: 88, physics: 84, chemistry: 86 },
    { id: 5, name: "Eva", math: 94, physics: 91, chemistry: 90 },
    { id: 6, name: "Farhan", math: 90, physics: 87, chemistry: 88 },
    { id: 7, name: "Grace", math: 83, physics: 80, chemistry: 79 },
    { id: 8, name: "Hassan", math: 76, physics: 78, chemistry: 74 },
    { id: 9, name: "Ivy", math: 89, physics: 86, chemistry: 85 },
    { id: 10, name: "Jack", math: 95, physics: 92, chemistry: 93 },
  ];

  return (
    <div>
      <BarChart width={800} height={400} data={data}>
        <Bar
          dataKey="math"
          fill="#8884d8"
          activeBar={<Rectangle fill="red" stroke="blue"></Rectangle>}
        ></Bar>
        <Bar dataKey="physics" fill="yellow"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default ReaChartLineChat;
