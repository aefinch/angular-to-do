var app = angular.module("TodoApp", []);

app.controller("NavCtrl", ($scope) => {
	$scope.cat="Meow";
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof!";
	$scope.showListView = true;

	$scope.newItem = () => {
		console.log("new item");
		$scope.showListView = false;
	};

	$scope.allItems = () => {
		console.log("all itms");
		$scope.showListView = true;
	};

});