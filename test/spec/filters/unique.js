'use strict';

describe('Filter: unique', function () {

  // load the filter's module
  beforeEach(module('aug5App'));

  // initialize a new instance of the filter before each test
  var unique;
  beforeEach(inject(function ($filter) {
    unique = $filter('unique');
  }));

  // it('should return array with duplicates removed', function () {
  //   var array = [1,2,3,4,5,6,6,6,6,6];
  //   expect(unique(array)).toBe([1,2,3,4,5,6]);
  // });

  // it('for an array of unique elements it should return the original array', function () {
  //   var array = [1,2,3,4,5];
  //   expect(unique(array)).toBe(array);
  // })

});
