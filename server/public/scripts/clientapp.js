var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.
    when('/toffee', {
      templateUrl: '/views/partials/toffee.html',
      controller: 'toffeeController'
    }).
    when('/yeti', {
      templateUrl: '/views/partials/yeti.html',
      controller: 'yetiController'
    }).
    when('/tiffi', {
      templateUrl: '/views/partials/tiffi.html',
      controller: 'tiffiController'
    }).
    when('/home', {
      templateUrl: '/views/partials/home.html',
      controller: 'homeController'
    }).
    otherwise({
      redirectTo: "/home"
    });
}]);

myApp.controller('toffeeController', ['$scope', function ($scope) {
  console.log('Mr. Toffee');
  $scope.message = "Hello, Mr. Toffee!";
}]);

myApp.controller('yetiController', ['$scope', function ($scope) {
  console.log('Mr. Yeti');
  $scope.message = "Hello, Mr. Yeti!";
}]);

myApp.controller('tiffiController', ['$scope', function ($scope) {
  console.log('Tiffi');
  $scope.message = "Hello, Tiffi!";

}]);

myApp.controller('homeController', ['$scope', function ($scope) {
  console.log('Home');
}]);
