var myapp = angular.module('myapp', ['ngRoute', 'ngResource']);

myapp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider

        .when('/', {

            templateUrl: 'view/main.html',
             controller: 'MainCtrl'

        })
        .when('/home', {

            templateUrl: 'view/home.html',
             controller: 'HomeCtrl'

        })
        .otherwise({

            redirectTo: '/'

        });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);