routes.$inject = ['$stateProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .state('image', {
      url: '/image/:imageid',
      template: require('./image.html'),
      controller: 'ImageController',
    });
}
