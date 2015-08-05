'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
	.controller('MainCtrl', function ($scope, $http, $location, slider) {
		this.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		////////////////////////////////////////////////////
		//////////           My Factory           //////////

		$scope.sliderImg = slider.getsliderImg();

		//////////              END                //////////
		/////////////////////////////////////////////////////

		//////////            Location            ///////////

		$scope.go = function (id) {
			$location.path('/info-serie/' + id);
		};

		$scope.go = function (id) {
			$location.path('/episode-img/' + id);
		};

		//////////               END               /////////
		////////////////////////////////////////////////////

		////////////////////////////////////////////////////
		//////////          Calling JSON          //////////

		$http.get("../json/serie-img.json")
			.then(function (response) {
				$scope.serieImg = response.data.episode;
			});

		//////////               END               //////////
		/////////////////////////////////////////////////////

	});
