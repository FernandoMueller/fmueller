(function() {
	'use strict';

	angular
		.module('crud', ['ngRoute', 'angularUtils.directives.dirPagination']) 
		.config(routeConfig)
	;

	routeConfig.$inject = ['$routeProvider'];

	/* @ngInject */
	function routeConfig($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/views/index.html'
			})
			.when('/cadastro', {
				templateUrl: '/views/cadastro.html'
			})
			.when('/editar/:id', {
				templateUrl: '/views/edit.html'
			})
			.otherwise({redirectTo: '/'});
	}
})();