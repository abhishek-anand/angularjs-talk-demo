'use strict';

angular.module('aug5App')
  .directive('hello', function () {
    return {
      template: '<div>Hello <span ng-transclude></span></div>',
      restrict: 'E',
      transclude: true,
      link: function postLink(scope, element, attrs) {
        element.bind('click', function() {
        	alert('Hey! I said hi. Now dont disturb.')
        })
      }
    };
  });
