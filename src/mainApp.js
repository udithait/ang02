import angular from "angular";
// import jquery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

var mainApp = angular.module("mainApp", []);

mainApp.controller("studentController", function($scope) {
  $scope.students = [
    {
      firstName: "Mahesh",
      lastName: "Parashar",
      email: "maheshparashar@mail.com"
    },
    {
      firstName: "Kenan",
      lastName: "Hancer",
      email: "kenanhancer@hotmail.com"
    }
  ];

  $scope.reset = function() {
    $scope.firstName = "Mahesh";
    $scope.lastName = "Parashar";
    $scope.email = "MaheshParashar@tutorialspoint.com";
  };

  $scope.reset();

  $scope.submit = function() {
    $scope.students.push({
      firstName: $scope.firstName,
      lastName: $scope.lastName,
      email: $scope.email
    });
  };
});
