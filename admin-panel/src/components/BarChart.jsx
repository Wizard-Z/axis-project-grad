import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ props, maxEarn }) {
  const data = props;
  //Not runs for the first time?? pass down from parent instead of calculating here.
  // const maxR = Math.max.apply(Math, data.datasets[0].data) + 5;
  console.log(
    "BARCHART HERE:",
    data,
    "MAXEARN::",
    maxEarn,
    "CalculatedMaxValue:"
  );
  const options = {
    title: {
      display: true,
      text: "Companies",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 213000,
            stepSize: 50000,
          },
        },
      ],
    },
  };
  return <Bar data={data} options={options} />;
}

export default BarChart;
