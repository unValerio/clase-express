angular.module('userApp.userList', [])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('userList', {
		url: '/',
		templateUrl: 'templates/userList.html',
		controller: 'userListCtrl'
	})
}])

.controller('userListCtrl', ['$scope', '$http',
function (                    $scope,   $http) {

	$http.get('http://localhost:5000/api/users')
	.then(function (res) {
	    
		if (res.data.status === "success") {
			$scope.users = res.data.users
		}
		else
			alert("Error al cargar la lista de usuarios")
	})

	$scope.actualizar = function() {
		$http.get('http://localhost:5000/api/users')
		.then(function (res) {
		    $scope.users = res.data.users
		}, function(res) {
			alert("Error al cargar la lista de usuarios")
		})
	}

	$scope.delete = function(userId) {
		$http.delete('http://localhost:5000/api/users/'+userId)
		.then(function (res) {
		   $scope.actualizar()
		}, function(res) {
			alert("Error al eliminar el usuario")
		})
	}

}])

