'use strict';

describe('Controller: InbuiltfiltersCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var InbuiltfiltersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InbuiltfiltersCtrl = $controller('InbuiltfiltersCtrl', {
      $scope: scope
    });
  }));

  it('should return unique items from a list of duplicated items', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
