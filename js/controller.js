/**
 * Controls all other Pages
 */
 angular.module('angularjs.controllers', [])
 
.controller('PageCtrl', function ($scope) {
  console.log("This is page controller!");
})
 
.controller('EventsCtrl', function ($scope,Events) {
  $scope.marathons = Events.all();
})

.controller('PhotosCtrl', function ($scope) {
  var items=[];
  for(i=1;i<=20;i++){
    items.push(i);
  }
  $scope.numbers= items;
})

.controller('PhotoDetailCtrl', function ($scope,$stateParams) {
  $scope.image = $stateParams.imagename;
})

.controller('ResultsCtrl', function ($scope,Results) {
   $scope.results = Results.all();
});