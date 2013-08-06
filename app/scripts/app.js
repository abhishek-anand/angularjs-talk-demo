'use strict';

angular.module('aug5App', ['ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/databind', {
        templateUrl: 'views/databind.html',
        controller: 'DatabindCtrl'
      })
      .when('/inbuiltfilters', {
        templateUrl: 'views/inbuiltfilters.html',
        controller: 'InbuiltfiltersCtrl'
      })
      .when('/customfilters', {
        templateUrl: 'views/customfilters.html',
        controller: 'CustomfiltersCtrl'
      })
      .when('/inbuiltdirectives', {
        templateUrl: 'views/inbuiltdirectives.html',
        controller: 'InbuiltdirectivesCtrl'
      })
      .when('/customdirectives', {
        templateUrl: 'views/customdirectives.html',
        controller: 'CustomdirectivesCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/httpcomm', {
        templateUrl: 'views/httpcomm.html',
        controller: 'HttpcommCtrl'
      })
      .when('/testpage', {
        templateUrl: 'views/testpage.html',
        controller: 'TestpageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
