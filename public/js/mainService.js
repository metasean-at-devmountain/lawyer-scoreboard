var app = angular.module('lawyerApp');

app.factory('mainService', function($http) {

	var factoryReturn = {};

	// Get data from a server api - Method 1
	factoryReturn.getData = function() {
		return $http({
			method: 'GET',
			url: '/lawyers'
		});
	}

	// // Get data from a server api - Method 2
	// factoryReturn.getData = function() {
	// 	return $http.get('/data').then(function(response) {
	// 		return response.data;
	// 	})
	// };

	return factoryReturn;
});