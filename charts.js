let myChart = document.getElementById("my-chart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = "black";

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
        borderColor: "gray",
        hoverBorderWidth: 4,
        hoverBorderColor: "black"
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Popular Colors",
      fontSize: 25
      //fontColor: "black"
    },
    legend: {
      display: true,
      //position: "right",
      labels: {
        fontColor: "gray"
      }
    },
    layout: {
      padding: {
        left: 50,
        right: 0,
        bottom: 0,
        top: 0
      }
    },
    tooltips: {
      enabled: true
    }
  }
});
