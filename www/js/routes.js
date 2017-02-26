angular.module('routes',[]).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'userController'
    })
    .state('home',{
      url:'/home',
      templateUrl: 'templates/home.html'
    })
    $urlRouterProvider.otherwise('/login');
  })
