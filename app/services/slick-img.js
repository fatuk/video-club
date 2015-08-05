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
