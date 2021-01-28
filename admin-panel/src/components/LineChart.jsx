import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ props }) {
  console.log("In lineChart::", props);
  // console.log("MAXImum is:", Math.max(props.data));
  /**const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'April',
      'May'
    ],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [3, 2, 2, 1, 5],
        borderColor: ['rgba(255, 206, 86, 0.2)'],
        backgroundColor: ['rgba(255, 206, 86, 0.2)'],
        pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
        pointBorderColor: 'rgba(255, 206, 86, 0.2)'
      },
      {
        label: 'Sales 2019 (M)',
        data: [1, 3, 2, 2, 3],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  } */
  const data = {
    labels: ["Nov", "Dec", "Jan"],
    datasets: props,
  };

  const options = {
    title: {
      display: true,
      text: "Sales-Trends",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 50,
            stepSize: 5,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
