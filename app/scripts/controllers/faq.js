'use strict';

/**
 * @ngdoc function
 * @name mercedesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mercedesApp
 */
 angular.module('mercedesApp.faq', [])
 .controller('FaqPageController', [FaqPageController]);

 function FaqPageController(){
 	document.title = "FAQ";
 }