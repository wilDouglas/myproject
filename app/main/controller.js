var main = angular.module('myapp.main', []);

main.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {


    $routeProvider

        .when('/', {

            templateUrl: 'main/main.html',
            controller: 'MainCtrl'

        });
}]);

function initCustomJqueryMain() {
    $('#link-main').addClass('active');
    $('#link-consulta-cep').removeClass('active');
}
main.controller('MainCtrl', ["$scope", function ($scope) {

    initCustomJqueryMain();

    $scope.nome = "";

    $scope.pessoas = [];

    $scope.enviar = function () {

        if ($scope.nome != "") {

            $scope.pessoas.push({'id': ($scope.pessoas.length + 1), 'nome': $scope.nome});
            $scope.nome = "";

        }
        else {
            $('#nome').css('border-color', 'red');
        }
    };

    $scope.removePessoa = function (item) {
        $scope.pessoas.splice($scope.pessoas.indexOf(item), 1);
    }

}]);