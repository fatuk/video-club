'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:InfoSerieCtrl
 * @description
 * # InfoSerieCtrl
 * Controller of the appApp
 */

angular.module('appApp')
  .controller('InfoSerieCtrl', function ($scope, slider, $routeParams) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    ////////////////////////////////////////////////////
    //////////           My Factory           //////////

    $scope.sliderImg = slider.getsliderImg();
    $scope.path      = $scope.sliderImg[$routeParams.id].img;

    //////////               END               //////////
    /////////////////////////////////////////////////////

  });
