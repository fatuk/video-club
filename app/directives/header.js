'use strict';

angular.module('appApp')
	.directive('mainHeader', function () {
		return {
			restrict    : 'E',
			templateUrl : 'views/header.html'
		};
	});