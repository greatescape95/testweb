angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/", {
    controller: "HomeController",
    templateUrl: "/app/home/templates/home.html"
  });
  $routeProvider.otherwise("/");
  }]);
