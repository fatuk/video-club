'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:EpisodeSerieCtrl
 * @description
 * # EpisodeSerieCtrl
 * Controller of the appApp
 */

angular.module('appApp')
  .controller('EpisodeSerieCtrl', function ($scope, $http, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    ////////////////////////////////////////////////////
    //////////          Calling JSON          //////////

  $http.get("../json/serie-img.json").success(function (response) {

		    $scope.images = response.episode.filter(function(el){

		    	return el.id === $routeParams.id;

		    })[0];

		});

    //////////               END               //////////
    /////////////////////////////////////////////////////

  });
