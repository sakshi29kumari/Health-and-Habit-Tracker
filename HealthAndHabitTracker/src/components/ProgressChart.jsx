import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressChart = ({ habits }) => {
  let completed = 0, remaining = 0;
  Object.values(habits).forEach(dateHabits => {
    completed += dateHabits.filter(h => h.completed).length;
    remaining += dateHabits.filter(h => !h.completed).length;
  });

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ["#4CAF50", "#FF6B6B"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chartSec">
      <h2>Progress Chart</h2>
      <Pie
  data={data}
  options={{
    responsive: false,        // disable automatic resizing
    plugins: { legend: { position: "bottom" } },
  }}
  width={600}   // set width
  height={400}  // set height
/>

    </div>
  );
};

export default ProgressChart;
