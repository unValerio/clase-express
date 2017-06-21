angular.module('userApp', [
	"ui.router",
	"userApp.main",
	"userApp.userList"
])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
}])