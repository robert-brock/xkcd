'use strict';

/* Services */

  var comicServices = angular.module('comicServices', ['ngResource']);
  //http://stackoverflow.com/questions/16194203/conditionally-load-external-json-into-localstorage-as-string
  //for use with breeze?
  //http://www.getbreezenow.com/documentation/querying-locally
  comicServices.factory('Comic', ['$resource',
    function($resource) {
      return $resource('imgs.xkcd.com/comics.json', {}, {
        query: {method:'GET', isArray:true}
      });
    }]);
