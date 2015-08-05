'use strict';

angular.module('appApp')
	.directive('mainFooter', function () {
		return {
			restrict : 	  'E',
			templateUrl:  'views/footer.html'
		};
	});