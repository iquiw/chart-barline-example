function draw(ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      datasets: [{
        label: 'Bar',
        type: 'bar',
        backgroundColor: 'rgb(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1,
        data: [10, 7, 9, 5, 8, 3, 4, 2, 1, 1],
        yAxisID: 'bar'
      }, {
        label: 'Line',
        type: 'line',
        backgroundColor: 'rgb(75, 192, 192, 0.5)',
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0,
        data: [11, 10, 9, 8, 7, 6, 5, 4, 3, 2],
        yAxisID: 'line'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          id: 'bar',
          ticks: {
            min: 0,
            stepSize: 1
          },
          beforeBuildTicks: (axis) => {
            if (axis.chart.getDatasetMeta(0).hidden) {
              axis.options.display = false;
            } else {
              axis.options.display = true;
            }
          }
        }, {
          id: 'line',
          ticks: {
            min: 0,
            stepSize: 1
          },
          beforeBuildTicks: (axis) => {
            if (axis.chart.getDatasetMeta(0).hidden) {
              axis.max = 12;
              axis.options.display = true;
            } else {
              axis.max = axis.chart.scales['bar'].max;
              axis.options.display = false;
            }
          }
        }]
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  draw(document.getElementById('myChart'));
});
