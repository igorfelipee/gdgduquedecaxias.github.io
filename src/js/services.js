angular.module('gdgsite', [])

.factory('MeetupFactory', function($http){
  function getEvents(){
    console.log('chamou')
    $http.get('https://api.meetup.com/2/events?group_urlname=GDGDuquedeCaxias&status=past,upcoming')
      .success(function(data){
        console.log('chamou dentro')
        return data;
    })
  }
})
