'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.homePage', [])
 .controller('HomePageController', [HomePageController]);

 function HomePageController(){
 	document.title = "Mercedes-Benz Classic Car Race - Forside";
 }