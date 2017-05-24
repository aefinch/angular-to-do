app.controller("ItemViewCtrl", function($routeParams, $scope, ItemFactory, ToolFactory){
	$scope.selectedItem = {};
	$scope.tools = [];


	ItemFactory.getSingleItem($routeParams.id)
	.then((results) => {
		$scope.selectedItem = results.data;
	})
	.catch((error) => {
		console.log("error in getSingleItem", error);
	});

	ToolFactory.getToolList($routeParams.id).then((results) => {
		$scope.tools = results;
	}).catch((error) => {
		console.log("error in getToolList", error);
	});
});