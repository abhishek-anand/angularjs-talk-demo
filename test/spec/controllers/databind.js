'use strict';

describe('Controller: DatabindCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var DatabindCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabindCtrl = $controller('DatabindCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.user.name).toBe('Minion');
    expect(scope.user.height).toBe('30 cms');
  });
});
