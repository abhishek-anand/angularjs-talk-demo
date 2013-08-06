'use strict';

angular.module('aug5App')
.factory('items', function ($http, $q) {
    // Service logic
    // ...

    // Public API here
    return {
      getCategories: function() {
        var deferred = $q.defer();
        $http.get('/data.json').success(function(data) {
          deferred.resolve(data);
        }).error(function(){
          deferred.reject();
        });
        return deferred.promise;
      }
    }
});
