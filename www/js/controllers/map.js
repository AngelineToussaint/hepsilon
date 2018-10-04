app.controller('MapCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.floorPicked = 0
    $scope.floor = "Rez de chausée"
    $scope.numberFloor ="RC"
    $scope.show ="Map"
    $scope.pm = "Photos"

    $scope.swap = function  (show,pm){
        if ($scope.show == "Map"){
            $scope.show = "Carou"
            setTimeout(function () {
                angular.element('.carousel').carousel();
            },100)

        }else{$scope.show = "Map"}

        setTimeout(function () {
            angular.element('.number-floor:not(.floor-'+ $scope.numberFloor +')').hide();
            angular.element('.floor-'+ $scope.numberFloor).show();
        }, 100)

        if($scope.pm == "Photos"){
            $scope.pm = "Map"
        }else($scope.pm ="Photos")
    }


    $scope.swapCarou = {
        RC: ["rdc-a","rdc-b","rdc-c","planEtage"],
        1: ["etage1-a","etage1-b","etage1-c","etage1-d"],
        2: ["etage2-a","etage2-b","etage2-c","etage2-d"],
        3: ["etage3-a","etage3-b","etage3-c","etage3-d"]
    }


    $scope.pickFloor = function (floor) {
         $scope.floorPicked = floor
     }
        $scope.floor = "Rez de chaussée"

        angular.element('.fixed-action-btn').floatingActionButton({
            hoverEnabled: false
        });

        $scope.setNumEtage= function(floor, numberFloor){
            $scope.floor = floor
            $scope.numberFloor = numberFloor

            var array = ['RC', 1, 2, 3]

            array.forEach(function (floor) {
                if ( ( angular.element( ".floor-" + floor ).is( ":hidden" )) && ($scope.numberFloor == floor) ) {
                    angular.element( ".floor-" + floor ).slideDown( "slow" );
                } else if ($scope.numberFloor != floor) {
                    angular.element( ".floor-" + floor ).slideUp( "slow" );
                }
            })
        }

}])