angular.module("myapp").config([
  "$routeProvider", function( $routeProvider){
    $routeProvider.when("/tasting", {
      controller: "TastingController",
      templateUrl: "app/tasting/templates/tasting.html"
    });
  }
]);
