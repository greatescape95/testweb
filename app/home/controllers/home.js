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
