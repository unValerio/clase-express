angular.module('userApp', [
	"ui.router",
	"userApp.main",
	"userApp.userList",
	"userApp.userCreate",
	"userApp.user",
	"userApp.userUpdate"
])

.config(['$urlRouterProvider', function ($urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
}])