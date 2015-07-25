var myapp = angular.module('myapp', ['ngRoute', 'ngResource', 'myapp.directives', 'myapp.main','myapp.consulta-cep',
	'myapp.cepService']);

myapp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.otherwise({

        redirectTo: '/'

    });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);