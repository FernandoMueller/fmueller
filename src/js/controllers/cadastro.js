(function () {
	'use strict';

	angular
		.module('crud')
		.controller('CadastroCtrl', CadastroCtrl);

	CadastroCtrl.$inject = ['$rootScope', '$location', 'crudcore'];

	function CadastroCtrl($rootScope, $location, crudcore) {
		/* jshint validthis: true */
		var vm = this;
		vm.carro = {
			"modelo": ""
			, "cor": ""
			, "placa": ""
			, "combustivel": ""
			, "marca": null
			, "imagem": null
		};

		vm.marcas = getMarcas;
		vm.cores = getCores;
		vm.cadastrarCarro = cadastrar;
		activate();
		
		function activate(){
			return getMarcas(), getCores();
		}

		function cadastrar() {
			console.log(vm.carro)
			$rootScope.carros.push(vm.carro);
			console.log($rootScope.carros);
			$location.path('/')
		}

		function getCores() {
			return crudcore.getCores().then(function(data){
				vm.cores = data.data;
			});
		}

		function getMarcas() {
			return crudcore.getMarcas().then(function(data){
				vm.marcas = data.data;
			});
		}
	}
})();