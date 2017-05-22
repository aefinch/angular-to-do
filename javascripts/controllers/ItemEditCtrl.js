app.controller("ItemEditCtrl", function($location, $routeParams, $scope, ItemFactory){
		ItemFactory.getSingleItem($routeParams.id).then((results) => {
			$scope.newTask = results.data;
		}).catch((error) => {
			console.log("getSingleItem error", error);
		});
	$scope.addNewItem = () => {
		ItemFactory.editItem($scope.newTask).then(() => {
			$location.url('/items/list');
		}).catch ((error) => {
			console.log("editItem", error);
		});
	};
});