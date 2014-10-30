/*
	
	Remember:
	ONE MUST GO TO localhost:3000/index.html to access

*/

var app = angular.module('lawyerApp');

app.controller('mainController', function($scope, mainService) {

	// Basic String Variable
	$scope.title = "Lawyer Scoreboard";

	// // Function call through controller to factory - Method 1
	// moduleServiceName.getData().then(function(awesomeData) {
	// 	console.log("moduleControllerName.getData");
	// 	$scope.awesomeData = awesomeData.data;
	// });

	// Function call through controller to factory - Method 2
	$scope.getData = function() {
		mainService.getData().then(function(data) {
			console.log(data.data);
			$scope.lawyers = data.data;
		});
	};
	$scope.getData();

});