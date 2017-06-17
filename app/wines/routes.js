angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
  $routeProvider.when("/wines", {
    controller: "WinesController",
    templateUrl: "app/wines/templates/wines.html"
  });
  }]);
