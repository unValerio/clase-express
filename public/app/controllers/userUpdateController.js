angular.module('userApp.userUpdate', [])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('userupdate', {
		url: '/update/:userId',
		templateUrl: 'templates/userCreate.html',
		controller: 'userUpdateCtrl'
	})
}])

.controller('userUpdateCtrl', ['$scope', '$http', '$stateParams',
function (                      $scope,   $http,   $stateParams) {

	$scope.message = ""

	$http.get("http://localhost:5000/api/users/"+$stateParams.userId)
	.then(function(res) {
		$scope.user = res.data.user
	}, function(res) {
		alert("Error al obtener el usuario")
	})

	$scope.create = function(user) {
		$http.put("http://localhost:5000/api/users/"+$stateParams.userId, user)
		.then(function(res) {
			$scope.message = "Usuario actualizado con éxito"
		}, function(res) {
			alert("Error al editar el usuario")
		})
	}

}])
