
app.controller("ItemCtrl", function($http, $q, $scope, FIREBASE_CONFIG){       //not yours first( these should be in alphabetical order), then yours
	$scope.dog = "Woof!";
	$scope.items = [];

	let getItemList = () => {
		let itemz = [];                   //$q represents "new Promise"
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)        //use $http instead of $.ajax
			.then((fbItems) => {
				var itemCollection = fbItems.data;
	            Object.keys(itemCollection).forEach((key) => {
		            itemCollection[key].id=key;
		            itemz.push(itemCollection[key]);

          });
          resolve(itemz);
			}).catch((error) => {
				reject(error);
			});
		});
	};
	let getItems = () => {
		getItemList().then((itemz) => {
			$scope.items = itemz;
		}).catch((error) => {
			console.log("get Error", error);
		});
	};
	getItems();

	let postNewItem = (newItem) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
			.then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	$scope.addNewItem = () => {
		$scope.newTask.isCompleted = false;
		postNewItem($scope.newTask).then(() => {
			$scope.newTask = {};
			getItems();
		}).catch((error) => {
			console.log("Add error", error);
		});
	};

});