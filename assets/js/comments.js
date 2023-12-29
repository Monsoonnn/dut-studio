const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 22, 24],
        datasets: [
            {
                label: 'ACCEPTED',
                data: [456, 701, 349, 632, 288, 587, 765, 422, 290, 512, 668, 740],
                borderWidth: 1,
                borderColor: '#3ECD27',
                backgroundColor: '#3ECD27',
            },
            {
                label: 'DENIED',
                data: [376, 521, 648, 267, 703, 442, 589, 721, 312, 675, 489, 799],
                borderWidth: 1,
                borderColor: '#F95A5A',
                backgroundColor: '#F95A5A',
            },
            {
                label: 'WAITING',
                data: [278,688,547,413,736,315,602,491,745,322,499,579],
                borderWidth: 1,
                borderColor: '#FF8125',
                backgroundColor: '#FF8125',
            }
        ]
    },
    options: {
        plugins: {
            legend: {
                position: 'right',
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