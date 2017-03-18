angular.module("myapp")
.controller("ContactController", ["$scope", "$http", function( $scope, $http ){
document.getElementById('contact').focus();
  $scope.submit = function( user ){
   console.log("prije requesta");
    $http({
      method: 'POST',
      url: '/api/messages',
      data: { user: user },
      headers: {'Content-Type': 'application/json'}
    }).then(function(res){
      console.log("uspjelo");
      console.log(res);
    }).catch( function( err ){
      console.log( err );
    });

    $http.post('/api/messages', {user:user});
  $.post("/api/messages",
        {
          user: user,
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
  };



$scope.submitNew = function(){
  console.log("prije requesta");
  $http({
    method: 'GET',
    url: '/api/messages',
  }).then(function(){
    console.log("uspjelo");
  }).catch( function( err ){
    console.log( err );
  });
};


$scope.reset = function( form ){
  if (form) {
       form.$setPristine();
       form.$setUntouched();
     }
};

var mapInit = function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: new google.maps.LatLng(43.32922, 16.573711000000003)
        });
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(43.32922, 16.573711000000003),
          map: map
        });
        google.maps.event.addDomListener(window, 'resize', function() {
  map.setCenter(map.getCenter());
});
      }();


}]);
