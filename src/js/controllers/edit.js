(function () {
	'use strict';

	angular
		.module('crud')
		.controller('EditCtrl', EditCtrl);

	EditCtrl.$inject = ['$rootScope', '$location', 'crudcore', '$routeParams'];

	function EditCtrl($rootScope, $location, crudcore, $routeParams) {
		/* jshint validthis: true */
		var id = $routeParams.id;

		var vm = this;
		vm.carro = $rootScope.carros[id];

		vm.marcas = getMarcas;
		vm.cores = getCores;
		vm.editarCarro = editar;
		activate();
		
		function activate(){
			return getMarcas(), getCores();
		}

		function getCores() {
			return crudcore.getCores().then(function(data){
				vm.cores = data.data;
			});
		}

		function editar() {
			$rootScope.carros[id] = vm.carro;
			$location.path('/')
		}

		function getMarcas() {
			return crudcore.getMarcas().then(function(data){
				vm.marcas = data.data;
			});
		}
	}
})();