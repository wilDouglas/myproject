
myapp.controller("HelloController", ["$scope",function ($scope) {
    $scope.total = 0;

    $scope.incrementar = function () {

        $scope.total++;
    };
}]);