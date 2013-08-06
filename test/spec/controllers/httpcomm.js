'use strict';

describe('Controller: HttpcommCtrl', function () {

  // load the controller's module
  beforeEach(module('aug5App'));

  var HttpcommCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HttpcommCtrl = $controller('HttpcommCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});
