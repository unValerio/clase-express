angular.module('userApp.user', [])

.config(['$stateProvider', function ($stateProvider) {
	$stateProvider.state('userpage', {
		url: '/user/:userId',
		templateUrl: 'templates/user.html',
		controller: 'userCtrl'
	})
}])

.controller('userCtrl', ['$scope', '$http', '$stateParams',
function (                $scope,   $http,   $stateParams) {

	$http.get("http://localhost:5000/api/users/"+$stateParams.userId)
	.then(function(res) {
		$scope.user = res.data.user
	}, function(res) {
		alert("Error al obtener el usuario")
	})

}])