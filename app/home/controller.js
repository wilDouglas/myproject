var home = angular.module('myapp.home',[]);

home.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/home', {

            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl'

        });
}]);

home.controller('HomeCtrl',['$scope', function ($scope) {
    $scope.message = "Hello World";
}]);