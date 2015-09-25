(function () {
	'use strict';

	angular
		.module('crud')
		.controller('IndexCtrl', IndexCtrl);

	IndexCtrl.$inject = ['$rootScope', 'crudcore', '$filter'];

	function IndexCtrl($rootScope, crudcore, $filter) {
		/* jshint validthis: true */
		var vm = this;
		
		if(!$rootScope.carros){
			$rootScope.carros = "";
		}
		vm.cores = "";
		vm.corFilter = "";
		vm.currentPage = 1;
		vm.deletar = deletarCarro;
		vm.filtro = "";
		vm.filtrar = filtrar;
		vm.getMarcaTitle = getMarcaTitle;
		vm.getMarcaImagem = getMarcaImg;
		vm.getCor = getCor;
		vm.marcas = "";
		vm.marcaFilter = "";
		vm.pageSize = 5;
		activate();
		
		function activate(){
			return getCarros(), getMarcas(), getCores();
		}
		
		function deletarCarro(id){
			$rootScope.carros.splice(id, 1);
		}

		function filtrar() {
			vm.filtro = {cor: vm.corFilter, marca: vm.marcaFilter};
		}

		function getCarros() {
			if(!$rootScope.carros){
				return crudcore.getCarros().then(function(data){
					$rootScope.carros = data.data;
				});
			}
		}

		function getCores() {
			return crudcore.getCores().then(function(data){
				vm.cores = data.data;
			});
		}

		function getCor(id) {
			for (var i = vm.cores.length - 1; i >= 0; i--) {
				if (vm.cores[i].id == id) {
					return vm.cores[i].title;
				};
			};
		}

		function getMarcas() {
			return crudcore.getMarcas().then(function(data){
				vm.marcas = data.data;
			});
		}

		function getMarcaTitle(id) {
			for (var i = vm.marcas.length - 1; i >= 0; i--) {
				if (vm.marcas[i].id == id) {
					return vm.marcas[i].title;
				};
			};
		}

		function getMarcaImg(id) {
			for (var i = vm.marcas.length - 1; i >= 0; i--) {
				if (vm.marcas[i].id == id) {
					return vm.marcas[i].imagem;
				};
			};
		}
	}
})();