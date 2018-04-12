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

	'ngAnimate',
	'ngAria',
	'ngCookies',
	'ngMessages',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch'
])
.controller('MainController', ['$rootScope', '$scope', MainController])
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
		templateUrl: 'views/main.html',
		controller: 'MainCtrl',
		controllerAs: 'main'
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
}