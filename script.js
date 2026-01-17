// Step 1: Data
const labels = ["Gas", "Coal", "Renewable", "Others"];
const values = [55, 30, 10, 5];

// Step 2: Canvas context
const ctx = document.getElementById("energyChart").getContext("2d");

// Step 3: Chart creation
// const energyChart = new Chart(ctx, {
//   type: "pie",
//   data: {
//     labels: labels,
//     datasets: [{
//       label: "Electricity Generation (%)",
//       data: values,
//       backgroundColor: [
//         "#4CAF50",
//         "#FF9800",
//         "#2196F3",
//         "#9E9E9E"
//       ]
//     }]
//   },
//   options: {
//   responsive: true,

//   onHover: (event, elements) => {
//     // remove all highlights first
//     rows.forEach(row => row.classList.remove("active"));

//     if (elements.length) {
//       const index = elements[0].index;
//       rows[index].classList.add("active");
//     }
//   },

//   plugins: {
//     tooltip: {
//       enabled: true
//     }
//   }
// }

// });

const energyChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [{
      label: "Electricity Generation (%)",
      data: values,

      backgroundColor: [
        "#4CAF50",
        "#FF9800",
        "#2196F3",
        "#9E9E9E"
      ],

      // 👇 ADD THESE TWO
      offset: 0,
      hoverOffset: 25      
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 300,
      easing: 'easeOutQuart'
    },

    onHover: (event, elements) => {
      rows.forEach(row => row.classList.remove("active"));
      if (elements.length) {
        rows[elements[0].index].classList.add("active");
      }
    }
  }
});


const rows = document.querySelectorAll(".data-row");



rows.forEach((row, index) => {
  row.addEventListener("mouseenter", () => {
    energyChart.setActiveElements([
      { datasetIndex: 0, index: index }
    ]);
    energyChart.update();
  });

  row.addEventListener("mouseleave", () => {
    energyChart.setActiveElements([]);
    energyChart.update();
  });
});
