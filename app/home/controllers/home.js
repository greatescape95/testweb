angular.module("myapp")
.controller("HomeController", ["$scope", "$timeout", function( $scope, $timeout ){
  var position;
  var debouncer;
  position = $(".fill-container").css("backgroundPositionX");
  $(window).on("scroll", function(){
    if(debouncer){
      $timeout.cancel( debouncer );
    }
    debouncer = $timeout( function(){
      console.log("test");
      if(position=== '0px'){
        $('.fill-container').stop().animate({
          backgroundPositionX: '-50px'
        }, 1000, function(){
          position = $(".fill-container").css("backgroundPositionX");
        });
      } else{
        $('.fill-container').stop().animate({
          backgroundPositionX: '0px'
        }, 1000, function(){
          position = $(".fill-container").css("backgroundPositionX");
        });
      }
    }, 400);
  });


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


console.log(document.getElementById( 'map' ));



}]);
