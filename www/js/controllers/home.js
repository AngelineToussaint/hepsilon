app.controller('HomeCtrl', ['$scope', '$rootScope', '$localForage', function ($scope, $rootScope, $localForage) {

    $scope.pickMode = function (mode) {
        $localForage.setItem('mode', mode)
    }

}])