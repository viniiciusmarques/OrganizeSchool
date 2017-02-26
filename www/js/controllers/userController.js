angular.module('starter')
.controller('userController', function($scope, $state){
  $scope.logar = function(){
      $state.go('home');
  };

});
