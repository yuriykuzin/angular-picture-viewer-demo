export default class ImageController {
	image = {};
	albumTitle = '';
	constructor($state, $scope, $http) {
		$http.get('https://jsonplaceholder.typicode.com/photos/' + $state.params.imageid)
		.success(response => $scope.image = response)
		.then(() => $http.get('https://jsonplaceholder.typicode.com/albums/' + $scope.image.albumId)
			.success(response => $scope.albumTitle = response.title));
	}
}
