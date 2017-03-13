angular.module('starter').controller('disciplinasController', function($scope) {

  $scope.data = {
    showorder :false,
    swipe :true
  };

  $scope.disciplinas = [
    {nome:'Programação Web',sigla:'PrWeb',prof:'Daniel'},
    {nome:'Banco de Dados',sigla:'BD',prof:'Geraldo'},
    {nome:'Inteligencia Artificial',sigla:'IA',prof:'Jaqueline'},
    {nome:'Calculo',sigla:'Calc',prof:'Leticia'},
    {nome:'Inglês Instrumental',sigla:'IngIns',prof:'Marcia'},
    {nome:'Estrutura de Dados',sigla:'EDados',prof:'Jaqueline'}
  ];

  $scope.remover = function(disciplina) {
  $scope.disciplinas.splice($scope.disciplinas.indexOf(disciplina), 1);
};
$scope.moveItem = function(disciplina, fromIndex, toIndex) {
  //Move the item in the array
  $scope.disciplinas.splice(fromIndex, 1);
  $scope.disciplinas.splice(toIndex, 0, disciplina);
};
});
