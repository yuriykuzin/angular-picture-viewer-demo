routes.$inject = ['$stateProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .state('album', {
      url: '/album/:albumid',
      template: require('./album.html'),
      controller: 'AlbumController',
      /* controllerAs: 'album',*/
    });
}
