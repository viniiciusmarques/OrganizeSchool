angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
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
