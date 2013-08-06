'use strict';

describe('Directive: hello', function () {
  beforeEach(module('aug5App'));

  var element;

  // yucky test hehehe
  it('should return Hello and a space for no input', inject(function ($rootScope, $compile) {
    element = angular.element('<hello></hello>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('Hello ');
  }));
});
