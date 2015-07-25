var homeService = angular.module('myapp.homeService', ['ngResource']);

homeService.factory('cepList', ['$resource', function ($resource) {
    return $resource('http://cep.correiocontrol.com.br/:cep.json', {}, {
        query: {method: 'GET', isArray: false},
        queryParameter: {method: 'GET', params: {query: '@cep'}, isArray: false}
    });
}]);
