import React from "react";

import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables);

export const HorizonBarChart = () => {
    const labels = [
      "ลาป่วย ลากิจ ลาคลอดบุตร",
      "ลาพักผ่อน",
      "ขออนุญาติไปต่างประเทศ",
      "ลาอุปสมบท",
      "ลาประกอบพิธีฮัจญ์",
      "เข้ารับการตรวจเลือก/เตรียมพล",
      "ลาศึกษา/ฝึกอบรม ดูงาน",
      "ลาติดตามคู่สมรส",
      "ปฏิบัติราชการนอกสำนักงาน",
      "ลากรณีพิเศษ",
    ];
  
    const data = {
      labels: labels,
      datasets: [
        {
          data: [25, 10, 2, 2, 1, 2, 5, 4, 12, 15],
          backgroundColor: ["#7180ff"],
          hoverOffset: 8,
        },
      ],
    };
  
    const option = {
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: false,
      },
      scales: {
        y: {
          ticks: {
            font: {
              size: 13,
              // family: 'angasnaNew'
            },
          },
        },
        x: {
          ticks: {},
        },
      },
    };
  
    return <Bar data={data} options={option} />;
  };
  