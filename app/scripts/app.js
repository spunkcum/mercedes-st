'use strict';

/**
* @ngdoc overview
* @name mercedesApp
* @description
* # mercedesApp
*
* Main module of the application.
*/
angular
.module('mercedesApp', [
	'mercedesApp.homePage',
	'mercedesApp.program',
	'mercedesApp.praticalInformation',
	'mercedesApp.mapOverview',
	'mercedesApp.faq',
	'mercedesApp.gallery',

	'ngAnimate',
	'ngAria',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
	'angular-google-analytics'
	])
.controller('MainController', ['$rootScope', '$scope', MainController])

.config(['AnalyticsProvider', function (AnalyticsProvider) {
   // Add configuration code as desired
   AnalyticsProvider.setAccount('UA-69011597-12');  //UU-XXXXXXX-X should be your tracking code
}]).run(['Analytics', function(Analytics) { }])

.config(function ($routeProvider) {
	$routeProvider
	.when('/forside', {
		templateUrl: 'views/main.html',
		controller: 'HomePageController',
		controllerAs: 'homePage'
	})
	.when('/program', {
		templateUrl: 'views/program.html',
		controller: 'ProgramPageController',
		controllerAs: 'program'
	})
	.when('/info', {
		templateUrl: 'views/practicalInformation.html',
		controller: 'PracticalInformationPageController',
		controllerAs: 'information'
	})
	.when('/oversigt', {
		templateUrl: 'views/mapOverview.html',
		controller: 'MapOverviewPageController',
		controllerAs: 'overview'
	})
	.when('/faq', {
		templateUrl: 'views/faq.html',
		controller: 'FaqPageController',
		controllerAs: 'main'
	})
	.when('/galleri', {
		templateUrl: 'views/gallery.html',
		controller: 'GalleryController',
		controllerAs: 'gallery'
	})
	.otherwise({
		redirectTo: '/forside'
	});
});

function MainController($rootScope, $scope){
	document.title = "Forside";
	$scope.page = "forside";

	$scope.selectPage = function(page){
		$scope.page = page;
	};

	var url = document.URL.split("#!");

	var urlPath = url[(url.length - 1)];

	if(urlPath.indexOf("forside") != -1){
		$scope.page = "forside";
	} else if (urlPath.indexOf("program") != -1){
		$scope.page = "program";
	} else if (urlPath.indexOf("info") != -1){
		$scope.page = "info";
	} else if (urlPath.indexOf("oversigt") != -1){
		$scope.page = "oversigt";
	} else if (urlPath.indexOf("galleri") != -1){
		$scope.page = "galleri";
	}
}