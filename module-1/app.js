( function(){
'use strict';

angular.module('lunchCheck', [] )
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
	$scope.message = "Your lunch menu is ready!";
}


})();