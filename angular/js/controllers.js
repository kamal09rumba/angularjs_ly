var artistControllers = angular.module('artistControllers',[]);

artistControllers.controller('ListController',['$scope' , '$http',function myContorller($scope , $http)
{
	$http.get('js/data.json').success(function(data){
		$scope.artists 		= data;
		$scope.artistOrder  = 'name';
	}) 
}]);

artistControllers.controller('DetailsController',['$scope' , '$http', '$routeParams',
	function myContorller($scope , $http, $routeParams)
{
	$http.get('js/data.json').success(function(data){
		$scope.artists 		= data;
		$scope.whichArtist  = $routeParams.artistId;

		if($routeParams.artistId > 0)
		{
			$scope.prevArtist = Number($routeParams.artistId)-1; 
		}else
		{
			$scope.prevArtist = $scope.artists.length-1;
		}

		if($routeParams.artistId < $scope.artists.length-1)
		{
			$scope.nextArtist = Number($routeParams.artistId)+1; 
		}else
		{
			$scope.nextArtist = 0;
		}


	}) 
}]);