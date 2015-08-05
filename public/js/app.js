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

'use strict';

angular.module('appApp')
	.directive('mainFooter', function () {
		return {
			restrict : 	  'E',
			templateUrl:  'views/footer.html'
		};
	});
'use strict';

angular.module('appApp')
	.directive('mainHeader', function () {
		return {
			restrict    : 'E',
			templateUrl : 'views/header.html'
		};
	});
'use strict';

angular.module('appApp')
	.factory('slider', function () {

		var sliderImg = [

			{
				id: 0,
				img: "img/American-Horror-Story-season-4.jpg"
			},

			{
				id: 1,
				img: "img/Defiance-season-3-2015.jpg"
			},

			{
				id: 2,
				img: "img/Falling_Skies_poster_the_fianl_season.jpg"
			},

			{
				id: 3,
				img: "img/Halo_Nightfall_estreno.jpg"
			},

			{
				id: 4,
				img: "img/penny_dreadful_season_2.jpg"
			},

			{
				id: 5,
				img: "img/the-royals-serie.jpg"
			},

			{
				id: 6,
				img: "img/Utopia_season_2_online.jpg"
			},

			{
				id: 7,
				img: "img/American-Horror-Story-season-4.jpg"
			},

			{
				id: 8,
				img: "img/Vikings-season-3_History-2015.jpg"
			},

			{
				id: 9,
				img: "img/Falling_Skies_poster_the_fianl_season.jpg"
			},

			{
				id: 10,
				img: "img/Halo_Nightfall_estreno.jpg"
			},

			{
				id: 11,
				img: "img/penny_dreadful_season_2.jpg"
			},

			{
				id: 12,
				img: "img/the-royals-serie.jpg"
			},

			{
				id: 13,
				img: "img/Utopia_season_2_online.jpg"
			},

			{
				id: 14,
				img: "img/Vikings-season-3_History-2015.jpg"
			}

		];

		return {
			getsliderImg: function () {
				return sliderImg;
			}
		};

	});

//# sourceMappingURL=../js/app.js.map