( function(){
'use strict';

angular.module('lunchCheck', [] )
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope){
	$scope.message = "welcome, order here!";


$scope.CheckMenu = function(string){
	var array = string.split(',');
	var count = string.split(',').length;
	// console.log(count);
	if(array==undefined)
		$scope.message= "You gotta order something!"
	else if(count>0 && count<=3)
	$scope.message = "Enjoy your meal! :)"
	else
		$scope.message = "Too much for your appetite. Try again!"
}
}})(); 