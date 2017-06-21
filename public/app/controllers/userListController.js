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
	})

	$scope.actualizar = function() {
		$http.get('http://localhost:5000/api/users')
		.then(function (res) {
		    
			if (res.data.status === "success") {
				$scope.users = res.data.users
			}
		})
	}

}])