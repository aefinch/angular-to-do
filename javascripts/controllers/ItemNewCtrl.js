
app.controller("ItemNewCtrl", function($location, $scope, ItemFactory){

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			//switch views
			$location.url("/items/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});