'use strict';

describe('Controller: CustomfiltersCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var CustomfiltersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomfiltersCtrl = $controller('CustomfiltersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
