(function () {
	'use strict';

	angular
		.module('crud')
		.factory('crudcore', crudcore);

	crudcore.$inject = ['$http'];

	function crudcore($http) {
		var service = {
			getCarros: getCarros
			, getMarcas: getMarcas
			, getCores: getCores
		};

		return service;

		function getCarros() {
			return $http({method: 'GET', url: '../public/js/carros.json'}).
				success(function(data, status, headers, config) {
					return data;
				}).
				error(function(data, status, headers, config) {
				});
		}

		function getCores() {
			return $http({method: 'GET', url: '../public/js/cores.json'}).
				success(function(data, status, headers, config) {
					return data;
				}).
				error(function(data, status, headers, config) {
				});
		}

		function getMarcas() {
			return $http({method: 'GET', url: '../public/js/marcas.json'}).
				success(function(data, status, headers, config) {
					return data;
				}).
				error(function(data, status, headers, config) {
				});
		}
	}
})();