'use strict';

angular.module('aug5App')
  .controller('ServicesCtrl', function ($scope, categories) {
    categories.getCategories().then(function (data) {
    	$scope.categories = data;
    	console.log(data);
    })
  });
