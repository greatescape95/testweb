angular.module("myapp", [
  "ngRoute",
]);

angular.module("myapp")
.controller("ContactController", ["$scope", "$http", function( $scope, $http ){

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
.controller("HomeController", ["$scope", function( $scope ){
  $scope.test = "hometest";
  $(document).ready(function(){
       $(".bottle_container").mouseover(function(){
           $(".pic_container").css("background-color", "red");
       });
       $(".bottle_container").mouseout(function(){
           $(".pic_container").css("background-color", "white");
       });
  });
}]);

angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/", {
    controller: "HomeController",
    templateUrl: "/app/home/templates/home.html"
  });
  $routeProvider.otherwise("/");
  }]);
