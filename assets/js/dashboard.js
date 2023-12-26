const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: [1,2,3,4,5,6,7,8,9,10],
      datasets: [{
        label: 'COMMENTS PER DAY',
        data: [820, 600, 900, 850, 780, 450, 680, 230, 730, 988],
        borderWidth: 1
      }]
    },
    options: {
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
          }
        },
        scales: {
            y: {
              display: true,
              title: {
                display: true,
              },
            
            }
          }
    }
  });