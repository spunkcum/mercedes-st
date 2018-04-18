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

	var url = document.URL.split("#!");

	if(url[(url.length - 1)].includes("forside")){
		$scope.page = "forside";
	}else if(url[(url.length - 1)].includes("program")){
		$scope.page = "program";
	}else if(url[(url.length - 1)].includes("info")){
		$scope.page = "info";
	}else if(url[(url.length - 1)].includes("oversigt")){
		$scope.page = "oversigt";
	}else if(url[(url.length - 1)].includes("faq")){
		$scope.page = "faq";
	}else if(url[(url.length - 1)].includes("galleri")){
		$scope.page = "galleri";
	}

	$scope.selectPage = function(page){
		$scope.page = page;
	};
}