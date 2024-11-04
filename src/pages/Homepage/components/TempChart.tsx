import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

// Example Data
const data = [
  {
    time: "Now",
    temperature: 26,
    windSpeed: "11.7 km/h",
    icon: "partly-cloudy",
  },
  { time: "22:00", temperature: 26, windSpeed: "9.3 km/h", icon: "clear" },
  {
    time: "00:00",
    temperature: 22,
    windSpeed: "12 km/h",
    icon: "thunderstorm",
  },
  { time: "2:00", temperature: 16, windSpeed: "15 km/h", icon: "rain" },
  { time: "4:00", temperature: 20, windSpeed: "15 km/h", icon: "thunderstorm" },
  {
    time: "6:00",
    temperature: 22,
    windSpeed: "15 km/h",
    icon: "thunderstorm-night",
  },
  { time: "8:00", temperature: 16, windSpeed: "15 km/h", icon: "rain" },
];

const renderIcon = (icon) => {
  switch (icon) {
    case "partly-cloudy":
      return "🌤️";
    case "clear":
      return "🌙";
    case "thunderstorm":
      return "⛈️";
    case "rain":
      return "🌧️";
    case "thunderstorm-night":
      return "🌩️";
    default:
      return "❓";
  }
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          background: "#ffffff",
          padding: "5px",
          border: "1px solid #ccc",
        }}
      >
        <p>{`${label}`}</p>
        <p>{`Temperature: ${payload[0].value}°C`}</p>
        <p>{`Wind Speed: ${payload[0].payload.windSpeed}`}</p>
        <p>{`Weather: ${renderIcon(payload[0].payload.icon)}`}</p>
      </div>
    );
  }
  return null;
};

const CustomCursor = ({ points, width, height }) => {
  const { x, y } = points[0];

  return (
    <svg>
      <line
        x1={x}
        y1={height}
        x2={x}
        y2={20}
        stroke="#FFC355"
        strokeWidth={1}
        strokeDasharray="5,5"
      />
    </svg>
  );
};

export const TempChart = () => {
  return (
    <ResponsiveContainer width="100%" height={175}>
      <LineChart
        data={data}
        margin={{ top: 0, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="time" spacing={10} hide />
        <YAxis domain={[10, 30]} hide />
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#FFC355"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 5, fill: "#fff" }}
          isAnimationActive={false}
          label={({ x, y, value }) => (
            <>
              <text
                x={x}
                y={y - 10}
                fill="#fff"
                textAnchor="middle"
                fontSize={14}
              >
                {value}°C
              </text>
              <text x={x} y={y + 50} fill="#fff" textAnchor="middle">
                {value}°C
              </text>
            </>
          )}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
