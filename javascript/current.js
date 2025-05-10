const lineChart = document.getElementById("myGraph");

new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "Latihan Grafik",
        data: [12, 14, 3, 5, 2, 3],
        borderWidth: 1,
        borderColor: "#80B3FF",
        backgroundColor: "#B6FFFA",
        color: "#FFFFFF",
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255, 0.3)",
        },
        title: {
          display: true,
          text: "Label X",
          color: "#FFFFFF",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255,0.3)",
        },
        title: {
          display: true,
          text: "Label Y",
          color: "#FFFFFF",
        },
      },
    },
  },
});
