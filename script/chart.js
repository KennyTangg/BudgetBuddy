// For Pie Chart
const piechart = document.getElementById('pie-chart');
if (piechart) {
  new Chart(piechart.getContext('2d'), {
    type: 'doughnut',
    data: {
      labels: ['Rent', 'Groceries', 'Shopping', 'Utilities', 'Dining Out', 'Entertainment', 'Transportation'],
      datasets: [{
        label: ' % for expense',
        data: [77.52, 5.81, 7.75, 3.88, 2.33, 1.55, 1.16],
        backgroundColor: [
          '#1E88E5', '#43A047', '#FDD835', '#8E24AA', '#FB8C00', '#E91E63', '#009688'
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio:1,
      plugins: {
        legend: { 
          position: 'top' 
        }
      }
    }
  });
}

// For Bar Chart
const barchart = document.getElementById('bar-chart');
if (barchart) {
  new Chart(barchart.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Groceries', 'Shopping', 'Utilities', 'Rent', 'Dining Out', 'Entertainment', 'Transportation'],
      datasets: [{
        label: 'Total Spending',
        data: [75, 100, 50, 150, 30, 20, 15],
        backgroundColor: ['#FDD835']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio:1,
      scales: { 
        x: { 
          stacked: true 
        }, 
        y: { 
          stacked: true 
        } 
      },
      plugins: { 
        legend: { 
          position: 'top' 
        } 
      }
    }
  });
}

// For Budget Bar Chart (in budget.html)
const budgetchart = document.getElementById('budget-bar');
if (budgetchart) {
  new Chart(budgetchart.getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Groceries', 'Shopping', 'Utilities', 'Rent', 'Dining Out', 'Entertainment', 'Transportation'],
      datasets: [
        {
          label: 'Spent Amount',
          data: [250, 100, 50, 1000, 30, 20, 15], // Your original spent data
          backgroundColor: '#FDD835', // Color for spent
        },
        {
          label: 'Remaining Budget',
          data: [50, 50, 100, 0, 70, 180, 85], // Calculate remaining amount
          backgroundColor: '#4CAF50', // Color for remaining budget
        }
      ]
    },
    options: {
      responsive: true,
      aspectRatio: 2,
      indexAxis: 'y',
      // scales: {
      //   x: {
      //     stacked: true,
      //   },
      //   y: {
      //     stacked: true,  
      //   }
      // },
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
}

// For Income vs Expense Bar Chart (in reports.html)
const incomeExpenseChart = document.getElementById('bar-chart2');
if (incomeExpenseChart) {
  new Chart(incomeExpenseChart.getContext('2d'), {
    type: 'line',
    data: {
      labels: ['July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Income',
          data: [2400, 2500, 2450, 2800, 2700, 2850], 
          fill:false,
          backgroundColor:'rgb(75, 192, 192)',
          borderColor: 'rgb(75, 192, 192)', 
          tension:0.1
        },
        {
          label: 'Expenses',
          data: [1800, 1950, 2100, 2300, 2100, 1290], 
          backgroundColor: '#F8B4B4',
          borderColor:'#F8B4B4',
          tension:0.1
        }
      ]
    },
    options: {
      responsive: true,
      indexAxis: 'x',
      scales: {
        x: {
          border: {
            color: 'grey',
          },
          title:{
            text:'Month',
            display:true,
            color:'black'
          }
        },
        y: {
          border: {
            color: 'grey'
          },
          title:{
            text:'Amount',
            display:true,
            color:'black'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        }
      }
    }
  });
}

const spendchart = document.getElementById('pie-chart2');
if (spendchart) {
  new Chart(spendchart.getContext('2d'), {
    type: 'pie',
    data: {
      labels: ['Rent', 'Groceries', 'Shopping', 'Utilities', 'Dining Out', 'Entertainment', 'Transportation'],
      datasets: [{
        label: ' % for expense',
        data: [77.52, 5.81, 7.75, 3.88, 2.33, 1.55, 1.16],
        backgroundColor: [
          '#1E88E5', '#43A047', '#FDD835', '#8E24AA', '#FB8C00', '#E91E63', '#009688'
        ],
        borderColor:[
          '#1E88E5', '#43A047', '#FDD835', '#8E24AA', '#FB8C00', '#E91E63', '#009688'
        ]
      }]
    },
    options: {
      responsive: true,
    }
  });
}
