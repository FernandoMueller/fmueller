(function() {
	'use strict';

	angular
		.module('crud')
		.directive('navBar', navBar);

	/* @ngInject */
	function navBar () {
		var directive = {
			bindToController: true
			, controller: Controller
			, controllerAs: 'vm'
			, restrict: 'E'
			, templateUrl: '/src/js/directives/topo-nav.html'
		};
		return directive;
	}

	/* @ngInject */
	function Controller ($http) {
		var vm = this;
	}
})();