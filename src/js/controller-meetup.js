angular.module('gdgsite',[])
.controller('MeetupCtrl', function($scope, $http){
    $http.get('https://api.meetup.com/2/events?group_urlname=GDGDuquedeCaxias&status=past,upcoming')
    .then(function(res){
      $scope.meetups = res.data;
    });
});