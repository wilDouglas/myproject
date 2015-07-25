var consulta_cep = angular.module('myapp.consulta-cep',[]);

consulta_cep.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider
        .when('/consulta', {

            templateUrl: 'consulta-cep/consulta-cep.html',
            controller: 'ConsultaCepCtrl'

        });
}]);

function initCustomJqueryHome() {
    $('#link-main').removeClass('active');
    $('#link-consulta-cep').addClass('active');
    $('#card-cep').hide();
}

consulta_cep.controller('ConsultaCepCtrl',['$scope','cepList', function ($scope,cepList) {

    initCustomJqueryHome();


    $scope.consultarCEP = function () {
        
        $('#card-cep').hide('slow');
        $('#card-cep').show('slow');

        cepList.get({cep: $scope.cep},function(response){

            $scope.endereco = response;

        }, function (errorResponse) {
            console.log(JSON.stringify(errorResponse));
        });

    };
}]);