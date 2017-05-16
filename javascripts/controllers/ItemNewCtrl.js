
app.controller("ItemNewCtrl", function($scope, ItemFactory){

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		ItemFactory.postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			//switch views
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});