angular.module('gdgsite', [])

.controller('MeetupCtrl', ['$scope', 'MeetupFactory', function($scope, MeetupFactory){
  $scope.meetups = MeetupFactory.getEvents();
}])
