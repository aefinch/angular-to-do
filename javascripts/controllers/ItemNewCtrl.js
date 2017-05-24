
app.controller("ItemNewCtrl", function($rootScope, $location, $scope, ItemFactory){

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		$scope.newTask.uid = $rootScope.user.uid;
		ItemFactory.postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			//switch views
			$location.url("/items/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});