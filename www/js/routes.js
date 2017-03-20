angular.module('starter')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('menu',{
      url: '/menu',
      templateUrl: 'templates/menu.html',
      abstract: true
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'userController'
    })

    .state('menu.home',{
      url:'/home',
      views :{
        'menuConteudo' : {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('menu.disciplinas',{
      url:'/disciplinas',
      views: {
        'menuConteudo' : {
          templateUrl: 'templates/disciplinas.html',
          controller: 'disciplinasController'
        }
      }
    })

    .state('menu.cadDisciplina',{
      url:'/cadDisciplina',
      views: {
        'menuConteudo' : {
          templateUrl: 'templates/cadDisciplina.html',
          controller: 'disciplinasController'
        }
      }
    })
    $urlRouterProvider.otherwise('/login');
  })
