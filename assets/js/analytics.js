const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1/11", "3/11", "6/11", "9/11", "12/11", "15/11", "18/11", "21/11", "26/11", "29/11"],
        datasets: [
            {
                label: 'NUMBER OF USER ACCESS',
                data: [285, 412, 556, 678, 732, 849, 921, 568, 635, 773],
                borderWidth: 1,
                borderColor: '#9785C1',
                backgroundColor: '#9785C1',
                color: 'black',
                font: {
                    size: 18,
                    family: 'Anton',
                    weight: '800',
                  },
            },

        ]
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
                min: 250,
                max: 1000,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 200
                }

            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["1/11", "3/11", "6/11", "9/11", "12/11", "15/11", "18/11", "21/11", "26/11", "29/11"],
        datasets: [
            {
                label: 'LIKE',
                data: [507,256,374,431,583,198,312,489,545,268],
                borderWidth: 1,
                borderColor: '#72C2EF',
                backgroundColor: '#72C2EF',
                color: 'black',
                font: {
                    size: 18,
                    family: 'Anton',
                    weight: '800',
                  },
            },
            {
                label: 'HEART',
                data: [498,174,352,567,421,289,543,205,457,389],
                borderWidth: 1,
                borderColor: '#F95A5A',
                backgroundColor: '#F95A5A',
                color: 'black',
                font: {
                    size: 18,
                    family: 'Anton',
                    weight: '800',
                  },
            },

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
                min: 100,
                max: 600,
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 100
                }

            }
        }
    }
});