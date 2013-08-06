'use strict';

angular.module('aug5App')
  .filter('unique', function () {
    return function (input) {
      return _.uniq(input);
    };
  });
