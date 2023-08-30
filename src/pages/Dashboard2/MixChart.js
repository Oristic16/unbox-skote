import React from "react";

import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(...registerables);

export const MixChart = () => {
    const labels = [
      "ม.ค.",
      "ก.พ.",
      "มี.ต.",
      "เม.ย.",
      "พ.ศ.",
      "มิ.ย.",
      "ก.ค.",
      "ส.ค.",
      "ก.ย.",
      "ต.ค.",
      "พ.ย.",
      "ธ.ค.",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          type: "bar",
          // fill: true,
          barThickness: 10,
          label: "ใบลา",
          backgroundColor: "#7180ff",
          data: [26, 16, 31, 48, 8, 24, 30, 12, 32, 30, 55, 70],
        },
        {
          type: "line",
          fill: true,
          label: "อนุมัติ",
          backgroundColor: "rgb(92, 255, 92, 0.1)",
          borderColor: "#5ff160",
          pointBackgroundColor: "#94ff95",
          data: [21, 12, 26, 45, 5, 21, 27, 9, 29, 26, 50, 68],
        },
        {
          type: "line",
          // fill: true,
          barThickness: 10,
          label: "ยกเลิก",
          borderColor: "#ff775f",
          borderDash: [6, 6],
          data: [4, 2, 10, 8, 4, 2, 5, 3, 14, 7, 15, 17],
        },
      ],
    };
  
    const option = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
          display: true,
          position: "bottom",
          // labels: { borderRadius }
        },
      },
      scales: {
        x: {
            ticks: {
                // color: "white"
            },
          grid: {
            display: false,
          },
        },
        y: {
            ticks: {
                // color: "white"
            },
          grid: {
            display: false,
          },
        },
      },
    };
  
    return <Bar data={data} options={option} />;
  };