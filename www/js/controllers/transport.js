app.controller('PublicTransportCtrl', ['$scope', function ($scope) {



}])
    .controller('ParkingCtrl', ['$scope', function ($scope) {
        $scope.parkings = [
            {
                name : 'Beaulieu',
                time : '4 min',
                address : 'Parking Beaulieu, Rue Gaëtan Rondeau, 44200 Nantes',
                picture : 'Beaulieu'
            },
            {
                name : 'Les Fonderies',
                time : '7 min',
                address : 'Parking Les Fonderies, Rue des Boires, 44200 Nantes',
                picture : 'les-fonderies'
            },
            {
                name : 'Zenpark Ouest',
                time : '11 min',
                address : 'Parking Zenpark, 23 Boulevard Gaston Doumergue, 44200 Nantes',
                picture : 'zenpark-ouest'
            },
            {
                name : 'Yespark',
                time : '15 min',
                address : 'Parking Yespark, 3 Rue du Cherche Midi, 44200 Nantes',
                picture : 'yespark'
            },
            {
                name : 'Nomad',
                time : '15 min',
                address : 'Parking NOMAD, Boulevard Victor Hugo, 44200 Nantes',
                picture : 'nomad'
            },
            {
                name : 'Zenpark Est',
                time : '16 min',
                address : 'Parking Zenpark, 13 Rue du Cherche Midi, 44200 Nantes',
                picture : 'zenpark-est'
            }
        ]
    }])