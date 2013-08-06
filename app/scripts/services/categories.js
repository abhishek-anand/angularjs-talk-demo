'use strict';

angular.module('aug5App')
.factory('categories', function categories($http, $q) {
	// The Public API
    // This sucks I know, USE POST for all requests that return JSON
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
