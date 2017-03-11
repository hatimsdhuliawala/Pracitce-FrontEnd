angular.module('myApp', ['ngRoute']);
angular.module('myApp').config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/home', {
			controller : 'MainCtrl',
			template : '<h1>{{title}}</h1><p>{{message}}</p>'
		})
		.when('/about', {
			controller : 'AboutCtrl',
			template : '<h1>{{title}}</h1><p>{{message}}</p>'
		})
		.when('/contact', {
			controller : 'ContactCtrl',
			template : '<h1>{{title}}</h1><p>{{message}}</p>'
		})
		.otherwise({
			redirectTo : '/home'
		})
}]);