import React from "react";

import { Chart as ChartJS, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(...registerables);

export const DonutChart = () => {
  const data = {
    labels: ["อนุญาตใบลา", "อนุมัติใบลา", "ยกเลิกใบลา"],
    datasets: [
      {
        data: [15, 10, 8],
        backgroundColor: ["#7180ff", "#4dff62", "#ff6868"],
        hoverOffset: 15,
        borderColor: "transparent",
        borderWidth: 10,
        offset: 5,
      },
    ],
  };

  const option = {
    // cutout: 250,
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  return <Doughnut data={data} options={option} />;
};