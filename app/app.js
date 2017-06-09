var app = angular.module('falconApp', []);


app.controller('falconController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){


  var dataSrc = "data/data.json";

  $http.get(dataSrc).success(function(data) {
  	console.log("data added .");

  	$scope.female = data.females;
  	$scope.male = data.males;
  	$scope.total = data.total;

  	$scope.network = data.networks;
  	$scope.demographic = data.demographics;

  	$scope.labels = data.labels;
  	$scope.topics = data.topics;

  	var topic = data.topics;
  	var label = data.labels;



  	function getRandomLabelAvatar(){
  		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
  		var avatarURL;

  		for(var i = 0; i < label.length; i ++){
  			avatarURL = label[randomNumber].users[i].avatar;
  			return avatarURL;
  		}
  	}

  	$scope.getRandomLabelAvatar = getRandomLabelAvatar;

  	function getRandomUserCount(){
  		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
  		var result;

  		for(var i = 0; i < topic.length; i ++){
  			result = topic[randomNumber].users.length;
  			return result;
  		}
  	}

  	$scope.getRandomUserCount = getRandomUserCount;

  	function getRandomAvatar(){
  		var randomNumber = Math.floor(Math.random()*(12-1+1)+1);
  		var avatarURL;
  				for(var i = 0; i < topic.length; i ++){
  					avatarURL = topic[randomNumber].users[i].avatar;
  					return avatarURL;	
  				}

	}
	$scope.getRandomAvatar = getRandomAvatar;



  	var male = $scope.male;
  	var female = $scope.female;
  	var total = $scope.total;

  	$scope.malePercent = Math.round((male/total) * 100);
  	$scope.femalePercent = Math.round((female/total) * 100);



  });




}]);
