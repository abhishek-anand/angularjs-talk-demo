'use strict';

angular.module('aug5App')
  .controller('InbuiltfiltersCtrl', function ($scope) {
    $scope.text = "This text will appear as lowercase";
    $scope.timestamp = 1288323623006;
    $scope.results = [	
    					{
    						name: "Ankur", 
    						marks: 100
    					},
    					{
    						name: "Abhishek",
    						marks: 30
    					},
    					{
    						name: "Shekhar",
    						marks: 99
    					} 		
    				  ];
  });
