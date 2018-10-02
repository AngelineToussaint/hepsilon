app.controller('ContactCtrl', ['$scope', '$localForage', 'Request', function ($scope, $localForage, Request) {

    Request.get('http://blabla.com').then(function (res) {
        console.log(res)
    })

    $localForage.getItem('open').then(function (res) {
        $scope.open = res
    })

    $scope.showOrHide = function () {
        $scope.open = !$scope.open

        $localForage.setItem('open', $scope.open)
    }

    $scope.list = {
        Resto1: {
            nom: 'Blabla1',
            adresse: 'Bloblo1'
        },
        Resto2: {
            nom: 'Blabla2',
            adresse: 'Bloblo2'
        },
        Resto3: {
            nom: 'Blabla3',
            adresse: 'Bloblo3'
        },
        Resto4: {
            nom: 'Blabla4',
            adresse: 'Bloblo4'
        }
    }

}])