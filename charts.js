let myChart = document.getElementById("my-chart").getContext("2d");

let jsChart = new Chart(myChart, {
  type: "pie", //bar, horizontal, pie, line, doughnut, radar, polarArea
  data: {
    labels: ["Red", "Blue", "Green", "Yellow", "Orange"],
    datasets: [
      {
        label: "Colors",
        data: [20, 15, 15, 5, 45],
        backgroundColor: ["red", "blue", "green", "yellow", "orange"],
        borderWidth: 1,
        borderColor: "#000"
      }
    ]
  },
  options: {}
});
