import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

export function WaterballChart() {
    const data = {
        labels: ['January', 'February'],
  datasets: [{
    label: 'Looping tension',
    data: [50,50],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
  }]
    };

  return <Line data={data} />;
}
