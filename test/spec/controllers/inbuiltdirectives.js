'use strict';

describe('Controller: InbuiltdirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var InbuiltdirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InbuiltdirectivesCtrl = $controller('InbuiltdirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
