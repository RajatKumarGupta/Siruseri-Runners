/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularjs', ['ngRoute','ui.router','angularjs.controllers','angularjs.services']);

/**
 * Configure the Routes
 */
 
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
     // Home  
    .state('home', {url: "/home",templateUrl: "partials/home.html",controller: "PageCtrl"})
    .state('events', {url: "/events",templateUrl: "partials/events.html",controller: "EventsCtrl"})
    .state('about', {url: "/about",templateUrl: "partials/about.html", controller: "PageCtrl"})
    .state('photos', {url:"/photos",templateUrl: "partials/photos.html", controller: "PhotosCtrl"})
	.state('photodetail/:imagename', {url:"/photodetail/:imagename",templateUrl: "partials/photodetail.html", controller: "PhotoDetailCtrl"})
    .state('results', {url:"/results",templateUrl: "partials/results.html", controller: "ResultsCtrl"})
    .state('registeration-form', {url:"/registeration-form",templateUrl: "partials/registeration-form.html"})	
    // else 404
    $urlRouterProvider.otherwise('/home', {templateUrl: "partials/home.html", controller: "PageCtrl"});
});