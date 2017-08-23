( function(){
'use strict';

angular.module('lunchCheck', [] )
.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope){
	$scope.message="Your lunch menu is ready!";
}


})();