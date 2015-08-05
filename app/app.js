'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */

angular
	.module('appApp', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'slick'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/info-serie/:id', {
				templateUrl: 'views/info-serie.html',
				controller: 'InfoSerieCtrl',
				controllerAs: 'infoserie'
			})
			.when('/episode-img/:id', {
				templateUrl: 'views/episode-serie.html',
				controller: 'EpisodeSerieCtrl',
				controllerAs: 'episodeserie'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
