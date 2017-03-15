angular.module('starter')
.controller('userController', function($scope, $state){
  $scope.logar = function(){
      $state.go('menu.home'); //enviar para rota home
  };
});
