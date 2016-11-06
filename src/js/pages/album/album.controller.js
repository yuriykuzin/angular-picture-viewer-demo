export default class AlbumController {
  constructor($state, $scope) {
    $scope.albumid = $state.params.albumid;
  }
}
