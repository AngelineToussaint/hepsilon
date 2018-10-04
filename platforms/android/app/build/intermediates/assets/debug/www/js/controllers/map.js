app.controller('MapCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

    $scope.floorPicked = 0
    $scope.floor = "Rez de chausée"
    $scope.numberFloor ="RC"

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

            if ( ( angular.element( ".toto" ).is( ":hidden" )) && ($scope.numberFloor == 'RC') ) {
                angular.element( ".toto" ).slideDown( "slow" );
            } else if ($scope.numberFloor != 'RC') {
                angular.element( ".toto" ).slideUp( "slow" );
            }

            if ( ( angular.element( ".toto1" ).is( ":hidden" )) && ($scope.numberFloor == 1) ) {
                angular.element( ".toto1" ).slideDown( "slow" );
            } else if ($scope.numberFloor != 1) {
                angular.element( ".toto1" ).slideUp( "slow" );
            }

            if ( ( angular.element( ".toto2" ).is( ":hidden" )) && ($scope.numberFloor == 2) ) {
                angular.element( ".toto2" ).slideDown( "slow" );
            } else if ($scope.numberFloor != 2){
                angular.element( ".toto2" ).slideUp( "slow" );
            }

            if ( ( angular.element( ".toto3" ).is( ":hidden" )) && ($scope.numberFloor == 3) ) {
                angular.element( ".toto3" ).slideDown( "slow" );
            } else if ($scope.numberFloor != 3){
                angular.element( ".toto3" ).slideUp( "slow" );
            }
        }

}])