'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.mapOverview', [])
 .controller('MapOverviewPageController', [MapOverviewPageController]);

 function MapOverviewPageController(){
 	document.title = "Oversigt";
 }