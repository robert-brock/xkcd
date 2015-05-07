'use strict';

  var comicApp = angular.module('comicApp', [
    'ngRoute',
    //'comicAnimations',
    'comicControllers',
    //'comicFilters',
    'comicServices',
    'ngSanitize'
  ]);

  comicApp.config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.
        when('/comics', {
          templateUrl: 'partials/xkcd-comic-detail.html',
          controller: 'ComicDetailCtrl'
        }).
        when('/comics/random', {
          templateUrl: 'partials/xkcd-comic-detail.html',
          controller: 'ComicRandomCtrl'
        }).
        when('/comics/:comicId', {
          templateUrl: 'partials/xkcd-comic-detail.html',
          controller: 'ComicDetailCtrl'
        }).
        when('/archive/', {
          templateUrl: 'partials/xkcd-comic-list.html',
          controller: 'ComicListCtrl'
        }).
        otherwise({
          redirectTo: '/comics'
        });
        // use the HTML5 History API, otherwise you have to use server side configuration
        //https://docs.angularjs.org/guide/$location
        //to accomplish html5 routing and the ability to refresh
        // $locationProvider.html5Mode(true);
    }]);
