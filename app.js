angular.module("myapp", [
  "ngRoute",
]);

$(document).ready(function(){
  $('.menu-small-icon').click(function(){
    $(".menu-small-dropdown").slideDown(300);
  });
  $(".menu-small-dropdown li").click(function(){
    $( ".menu-small-dropdown" ).hide();
  });
});

angular.module("myapp")
.controller("ContactController", ["$scope", "$http", function( $scope, $http ){
document.getElementById('contact').focus();
$(document).ready(function(){
    $(this).scrollTop(0);
});
  $scope.submit = function( user ){
   console.log("prije requesta");
    $http({
      method: 'POST',
      url: '/api/messages',
      data: { user: user },
      headers: {'Content-Type': 'application/json'}
    }).then(function(res){
      console.log("uspjelo");
      //console.log(res);
      $('#contact-form').css("display", "none");
      $('#feedback-form').css("display", "block");
    }).catch( function( err ){
      console.log( err );
    });


  };

  /*  $http.post('/api/messages', {user:user});
  $.post("/api/messages",
        {
          user: user,
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });   */

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

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
    $routeProvider.when("/contact", {
      templateUrl: "app/contact/templates/contact.html",
      controller: "ContactController"
    });
  }
]);

angular.module("myapp")
.controller("HomeController", ["$scope", "$timeout", function( $scope, $timeout ){
  //focus first link
  document.getElementById('home').focus();
  $(document).ready(function(){
      $(this).scrollTop(0);
  });
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

}]);

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/", {
    controller: "HomeController",
    templateUrl: "/app/home/templates/home.html"
  });
  $routeProvider.otherwise("/");
  }]);

angular.module("myapp")
.controller("TastingController", ["$scope", "$timeout", function( $scope, $timeout ){
  //focus first link
  document.getElementById('tasting').focus();
  $(document).ready(function(){
      $(this).scrollTop(0);
  });
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

}]);

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider){
    $routeProvider.when("/tasting", {
      controller: "TastingController",
      templateUrl: "app/tasting/templates/tasting.html"
    });
  }
]);

angular.module("myapp")
.controller("WinesController", ["$scope", "$timeout", function( $scope, $timeout ){
  //focus first link
  document.getElementById('wines').focus();
  $(document).ready(function(){
      $(this).scrollTop(0);
  });
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

}]);

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/wines", {
    controller: "WinesController",
    templateUrl: "app/wines/templates/wines.html"
  });
  }]);
