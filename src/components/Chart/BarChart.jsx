import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "x firmasının 6 ay oyunca sattığı bmw oranı",
    },
  },
};

const labels = ["ocak", "şubat", "mart", "nisan", "Mayıs", "haziran"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [100, 10, 20, 25, 36, 8],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [50, 1, 75, 2, 36, 85],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export default function BarChart() {
  return (
    <div className="barChart">
      <Bar options={options} data={data} />
    </div>
  );
}
