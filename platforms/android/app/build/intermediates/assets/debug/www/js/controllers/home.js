app.controller('HomeCtrl', ['$scope', '$localForage', function ($scope, $localForage) {



    $scope.pickMode = function (mode) {
        $localForage.setItem('mode', mode)
    }

}])