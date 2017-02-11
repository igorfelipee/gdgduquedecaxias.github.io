angular.module('gdgsite.controllers', [])

.controller('MeetupCtrl', function($scope, $http, MeetupFactory) {
    //$scope.json = MeetupFactory.data.getEvents();
    MeetupFactory.getEvents().then(function(res) {
        $scope.events = res.data.results
    }, function(err) {
        if (err.status == 404) {
            console.log('socorro');
        }
    });
});
