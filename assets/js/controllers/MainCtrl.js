myapp.controller('MainCtrl', ["$scope", function ($scope) {
    $scope.nome = "";

    $scope.pessoas = [];

    $scope.enviar = function () {

        if($scope.nome != "") {

            $scope.pessoas.push({'id': $scope.pessoas.length + 1, 'nome': $scope.nome});
            $scope.nome = "";

        }
    };

    $scope.removePessoa = function(item){
        $scope.pessoas.splice($scope.pessoas.indexOf(item),1);
    }

}]);
