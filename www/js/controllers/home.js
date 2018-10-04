app.controller('HomeCtrl', ['$scope', '$rootScope', '$localForage', function ($scope, $rootScope, $localForage) {

    $localForage.getItem('mode').then(function (mode) {
        $rootScope.mode = mode

        $scope.initComponents(mode)
    })

    $scope.pickMode = function (mode) {
        if (mode != 'visitor') {
            $localForage.setItem('mode', mode)

            $rootScope.mode = mode

            $scope.initComponents(mode)
        }
    }

    $scope.initComponents = function (mode) {
        setTimeout(function () {
            angular.element('.carousel.carousel-slider').carousel({
                fullWidth: true,
                indicators: true,
                onCycleTo: function (item) {
                    angular.element('body').scope().changeTitle(
                        angular.element(item).data('item')
                    )
                }
            })

            if (mode != null) {
                angular.element('.tap-target').tapTarget()

                angular.element('.carousel.carousel-slider').carousel('set', 1)
            }
        }, 100)
    }

}])