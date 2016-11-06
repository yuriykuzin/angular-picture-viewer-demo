routes.$inject = ['$stateProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .state('album', {
      url: '/album',
      template: require('./album.html'),
      controller: 'AlbumController',
      controllerAs: 'album',
    });
}
