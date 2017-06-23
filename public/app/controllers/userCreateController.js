angular.module('userApp.userCreate', [])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('userCreate', {
		url: '/create',
		templateUrl: 'templates/userCreate.html',
		controller: 'userCreateCtrl'
	})
}])

.controller('userCreateCtrl', ['$scope', '$http',
function (                      $scope,   $http) {

	$scope.message = ""

	$scope.create = function(user) {
		
		$http.post('http://localhost:5000/api/users', user)
		.then(function(res) {
			$scope.user = {}
			$scope.message = "Usuario creado exitosamente"
		}, function(res) {
			alert("Error al crear el usuario")
		})

	}

}])