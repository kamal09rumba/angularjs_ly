var myApp = angular.module('myApp',[
		'ngRoute',
		'artistControllers',
	]);
// Setting up how the partials will run

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/list',{
		templateUrl : 'partials/list.html',
		controller  : 'ListController'
	}).
	when('/details/:artistId',{
		templateUrl : 'partials/details.html',
		controller  : 'DetailsController'
	}).
	otherwise({
		redirectTo : '/list'
	});
}]);
