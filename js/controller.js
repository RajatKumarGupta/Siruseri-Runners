/**
 * Controls all other Pages
 */
 angular.module('angularjs.controllers', [])
 
.controller('HomeCtrl', function ($scope,$interval,Quotes) {
  console.log("This is Home controller!");
    $scope.quote=Quotes.get(0);
    var i=0;
    var timer = $interval(function(){
        $scope.quote=Quotes.get(i);
        if(i>=Quotes.all().length-1) i=-1;
        i++;
    },5000);
})
  
.controller('PageCtrl', function ($scope) {
  console.log("This is page controller!");
})
 
.controller('EventsCtrl', function ($scope,$http) {
    var responsePromise = $http.get("http://localhost:80/events");
    responsePromise.success(function(data, status, headers, config) {
        $scope.marathons = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });     
})

.controller('PhotosCtrl', function ($scope,$http) {
    var responsePromise = $http.get("http://localhost:80/photos");
    responsePromise.success(function(data, status, headers, config) {
        $scope.photos = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });
})

.controller('PhotoDetailCtrl', function ($scope,$stateParams) {
  $scope.image = $stateParams.imagename;
})

.controller('ResultsCtrl', function ($scope,$http) {
    var responsePromise = $http.get("http://localhost:80/results");
    responsePromise.success(function(data, status, headers, config) {
        $scope.results = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });
})
 
.controller('AboutCtrl', function ($scope,$http) {
    var responsePromise = $http.get("http://localhost:80/about");
    responsePromise.success(function(data, status, headers, config) {
        $scope.about = data;
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });
})

.controller('ProfileCtrl', function ($scope,$stateParams,$http) {
    var responsePromise = $http.get("http://localhost:80/about");
    responsePromise.success(function(data, status, headers, config) {
        $scope.profile = data[$stateParams.profilename];
        $scope.profileKeys = Object.keys($scope.profile);
    });
    responsePromise.error(function(data, status, headers, config) {
        console.log("Request failed!");
    });
});