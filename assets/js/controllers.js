myapp.controller('MainCtrl', ["$scope", function ($scope) {
    $scope.nome = "";

    $scope.pessoas = [];

    $scope.enviar = function () {

        if($scope.nome != "") {

            $scope.pessoas.push({'id': $scope.pessoas.length + 1, 'nome': $scope.nome});
            $scope.nome = "";

        }
        else{
                $('#nome').css('border-color','red');
        }
    };

    $scope.removePessoa = function(item){
        $scope.pessoas.splice($scope.pessoas.indexOf(item),1);
    }

}]);

myapp.controller('HomeCtrl',['$scope', function ($scope) {
    $scope.message = "Hello World";
}]);
