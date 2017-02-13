angular.module('app.controllers', [])
  
.controller('agendaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var contatosLocal = [
	{nome: 'Paulo', telefone: '2133-3124', favorito: false},
	{nome: 'Rogério', telefone: '9999-9999', favorito: false},
	{nome: 'Maria', telefone: '8888-88888', favorito: false},
	{nome: 'Marcia', telefone: '7777-7777', favorito: false},
	{nome: 'Paulo', telefone: '2133-3124', favorito: false},
	{nome: 'Rogério', telefone: '9999-9999', favorito: false},
	{nome: 'Maria', telefone: '8888-88888', favorito: true},
	{nome: 'Marcia', telefone: '7777-7777', favorito: true},
	];
	
	$scope.contatos = contatosLocal;
}])
   
.controller('novoContatoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 