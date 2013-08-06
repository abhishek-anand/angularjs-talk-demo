'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have three items initially', function () {
    expect(scope.title).toBe("Chai, Samosaa, Software");
  });
});
