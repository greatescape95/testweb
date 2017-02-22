angular.module("myapp").config([
  "$routeProvider", function( $routeProvider ){
    $routeProvider.when("/contact", {
      templateUrl: "app/contact/templates/contact.html",
      controller: "ContactController"
    });
  }
]);
