// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
$(document).ready(function() {
	$.ajax({
		url : "/happyhouse/visit/age",
		success : function(data) {
			console.dir(data);
			var ctx = document.getElementById("myPieChart");
			var myPieChart = new Chart(ctx, {
				type: 'doughnut',
				data: {
					labels: ["10s", "20s", "30s", "40s", "50s", "60s"],
					datasets: [{
						data: [data.visit10, data.visit20, data.visit30, data.visit40, data.visit50, data.visit60],
						backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#af7ac5', '#f8c471', '#f1948a'],
						hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#9b59b6', '#f5b041', '#ec7063'],
						hoverBorderColor: "rgba(234, 236, 244, 1)",
					}],
				},
				options: {
					maintainAspectRatio: false,
					tooltips: {
						backgroundColor: "rgb(255,255,255)",
						bodyFontColor: "#858796",
						borderColor: '#dddfeb',
						borderWidth: 1,
						xPadding: 15,
						yPadding: 15,
						displayColors: false,
						caretPadding: 10,
					},
					legend: {
						display: false
					},
					cutoutPercentage: 80,
				},
			});
		}
	})
	
});
