app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
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

	let deletz = (itemId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
			.then((resultz) => {
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	return {getItemList:getItemList, postNewItem:postNewItem, deletz:deletz};
});