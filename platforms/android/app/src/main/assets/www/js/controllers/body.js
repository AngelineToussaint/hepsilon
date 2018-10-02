app.controller('BodyCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $rootScope.pageTitle = 'HEPSILON'

    $rootScope.changeTitle = function (title) {
        $scope.$apply(function() {
            $rootScope.pageTitle = title
        })
    }

    $rootScope.openMap = false

    $rootScope.changeOpeningMap = function () {
        $rootScope.openMap = !$rootScope.openMap

        $rootScope.pageTitle = ($rootScope.openMap == true) ? 'Visite' : ''
    }

}])