routes.$inject = ['$stateProvider'];

export default function routes($routeProvider) {
  $routeProvider
    .state('home', {
      url: '/',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home',
    });
}
