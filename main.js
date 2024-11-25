const colors = {
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColor: [
    "rgba(255,99,132,1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
};

function createChart(ctx, type, label, data) {
  return new Chart(ctx, {
    type: type,
    data: {
      labels: ["CS", "IT", "ECE", "EE", "ME", "BE"],
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: colors.backgroundColor,
          borderColor: colors.borderColor,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: type === "bar" ? { y: { beginAtZero: true } } : undefined,
    },
  });
}

// Initialize charts
createChart(
  document.querySelector(".chart"),
  "bar",
  "# of students",
  [105, 124, 78, 91, 62, 56]
);
createChart(
  document.querySelector(".barChart"),
  "bar",
  "# of teachers",
  [50, 60, 45, 40, 35, 30]
);
createChart(
  document.getElementById("chartP"),
  "pie",
  "# of students",
  [105, 124, 78, 91, 62, 56]
);
createChart(
  document.getElementById("chartT"),
  "pie",
  "# of students",
  [105, 124, 78, 91, 62, 56]
);

$(document).ready(function () {
  $(".data-table").each((_, table) => $(table).DataTable());
});


