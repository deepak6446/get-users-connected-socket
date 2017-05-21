var app = angular.module('myApp',['btford.socket-io','angularMoment'])

app.controller('myCntrl',myCntrl);

function myCntrl($scope,chatSocket,$interval){

	$scope.submit = function(){
		$scope.span = false;
		$scope.mainPage = false;
		if($scope.userName == undefined){
			$scope.class = "red";
			$scope.span = true;
		}else{
			$scope.class = "white";
			$scope.span = false;
		    $scope.mainPage = true;
			chatSocket.emit('user connected',{userName:$scope.userName});
		}
		$scope.userName=undefined;
	}
    
	chatSocket.on('connect-disconnect',function(data){
		$scope.connected = data ;
	});
}

app.filter("getDiff", function() {
  return function(date) {
    var startDate = new Date(date);
    var endDate = new Date();
    var milisecondsDiff = endDate - startDate;    
      return Math.floor(milisecondsDiff/(1000*60*60)).toLocaleString(undefined, {minimumIntegerDigits: 2}) + ":" + (Math.floor(milisecondsDiff/(1000*60))%60).toLocaleString(undefined, {minimumIntegerDigits: 2})  + ":" + (Math.floor(milisecondsDiff/1000)%60).toLocaleString(undefined, {minimumIntegerDigits: 2}) ;
  }
});

app.factory('chatSocket',['socketFactory',function(socketFactory){
	return socketFactory();
}]);  