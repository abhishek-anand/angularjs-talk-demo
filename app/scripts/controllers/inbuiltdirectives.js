'use strict';

angular.module('aug5App')
  .controller('InbuiltdirectivesCtrl', function ($scope) {
    $scope.visibility = false;
    $scope.showText= function () {
    	$scope.visibility = true;
    }
    $scope.hideText= function () {
    	$scope.visibility = false;
    }
  });
