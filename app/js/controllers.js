'use strict';

/* Controllers */

var comicControllers = angular.module('comicControllers', []);

comicControllers.controller('ComicListCtrl', ['$scope','Comic',
  function($scope, Comic) {
    $scope.comics = Comic.query();
    $scope.orderProp = 'index';
  }]);

comicControllers.controller('ComicDetailCtrl', ['$scope', '$routeParams','$filter','Comic','$location',
  function($scope, $routeParams, $filter, Comic, $location) {
    var comics = Comic.query()
    .$promise.then(function(comics) {
      $scope.newestComic = comics.length;
      $scope.nextComic = $routeParams.comicId < comics.length ? parseInt($routeParams.comicId)+1 : comics.length;
      $scope.prevComic = $routeParams.comicId > 1 ? $routeParams.comicId-1 : 1;
      $scope.comic = $filter('filter')(comics, {index:$routeParams.comicId || comics.length })[0];
      $scope.serverAbsUrl = $location.absUrl();
      $scope.serverHost = "http://"+ $location.host() + ":" + $location.port();
    });
  }]);

comicControllers.controller('ComicRandomCtrl', ['$scope', '$location','Comic',
  function($scope, $location, Comic) {
    var comics = Comic.query()
    .$promise.then(function(comics) {
      var index = Math.ceil(Math.random()*comics.length);
      $location.path("/comics/"+index);
    });
  }]);
