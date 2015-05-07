'use strict';

/* Directives */
// comicControllers is defined in controllers.js
comicControllers.directive('comicDetail', function() {
    return {
      template: '<img ng-src="{{comic.filename}}" ng-attr-title="{{comic.tooltip}}" class="comic" >'
    };
  });

comicControllers.directive('comicNav', function() {
    return {
      templateUrl: 'partials/xkcd-comic-nav.html'
    };
  });
