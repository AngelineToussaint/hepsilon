app.controller('RestoCtrl', ['$scope', function ($scope) {

    $scope.categoryToSelect = ''

    $scope.selectCategory = function (category){
        $scope.categoryToSelect = category
    }

    $scope.restos = [
        {
            category : 'Burger',
            name : 'Jab\'s Burger',
            price : '€',
            address : '1 rue Francoise Giroud, 44200, Nantes',
            picture : 'jabsBurger'
        },
        {
            category : 'Burger',
            name : 'Le Melting Potes - Burger',
            price : '€',
            address : '26 bd de la Prairie au Duc | Ile de Nantes, 44200, Nantes',
            picture : 'leMeltingPotes'
        },
        {
            category : 'Sandwicherie',
            name : 'Waffle Factory',
            price : '€',
            address : '6 Rue du Docteur Zamenhof | Centre Commercial Beaulieu, 44200, Nantes',
            picture : 'waffleFactory'
        },
        {
            category : 'Sandwicherie',
            name : 'O\'Tacos',
            price : '€',
            address : 'Centre Commercial Beaulieu, 44200, Nantes',
            picture : 'oTacos'
        },
        {
            category : 'Sandwicherie',
            name : 'Brioche Dorée',
            price : '€',
            address : 'Centre Commercial Beaulieu, 44200, Nantes',
            picture : 'briocheDoree'
        },
        {
            category : 'Grande Surface',
            name : 'Carrefour',
            price : '€',
            address : 'Centre Commercial Beaulieu, 44200, Nantes',
            picture : 'carrefour'
        },
        {
            category : 'Grande Surface',
            name : 'Intermarché Express',
            price : '€',
            address : '7 Rue Françoise Giroud, 44200 Nantes',
            picture : 'intermarcheExpress'
        },
        {
            category : 'Grande Surface',
            name : 'Lidl',
            price : '€',
            address : '10 Boulevard Victor Hugo, 44200 Nantes',
            picture : 'lidl'
        },
        {
            category : 'Grande Surface',
            name : 'Spar',
            price : '€',
            address : '1 Boulevard De La Prairie Aux Ducs, 44200 Nantes',
            picture : 'spar'
        },
        {
            category : 'Sandwicherie',
            name : 'Subway',
            price : '€/€€',
            address : 'Centre Commercial Carrefour Beaulieu, 44200, Nantes',
            picture : 'subway'
        },
        {
            category : 'Burger',
            name : '231 East Street Nantes',
            price : '€€',
            address : 'Boulevard du Général de Gaulle | Centre Commercial Beaulieu, 44200, Nantes',
            picture : '231EastStreet'
        },
        {
            category : 'Restaurant',
            name : 'Chromosome Restaurant',
            price : '€€',
            address : '6 Promenade Europa, 44200, Nantes'
            picture : 'chromosomeRestaurant'
        },
        {
            category : 'Pizzeria',
            name : 'La Villa Medicis',
            price : '€€/€€€',
            address : 'Rue Gaetan Rondeau | Centre Commercial Beaulieu, 44200, Nantes',
            picture : 'laVillaMedicis'
        },
        {
            category: 'Pizzeria',
            name: '180G Pizza',
            price: '€€/€€€',
            address: 'Place Francois II | 6c, 44200, Nantes',
            picture : '180GPizza'
        },
        {
            category : 'Pizzeria',
            name : 'Pizza Tradition',
            price : '€€/€€€',
            address : '10 boulevard Adolphe Billault | Boulevard Victor Hugo, 44200, Nantes',
            picture : 'pizzaTradition'
        },
        {
            category : 'Pizzeria',
            name : 'Le Comptoir Sale & Pepe',
            price : '€€/€€€',
            address : '21 Rue Foure, 44000, Nantes',
            picture : 'leComptoirSalePepe'
        },
        {
            category : 'Restaurant',
            name : 'Les Fonderies',
            price : '€€/€€€',
            address : '25 boulevard Vincent Gache, 44200, Nantes'
            picture : 'lesFonderies'
        },
        {
            category : 'Restaurant',
            name : 'La Passerelle de Marcel',
            price : '€€/€€€',
            address : '7 allée Jacques Berque | Quai Malakoff, 44000, Nantes'
            picture : 'laPasserelleDeMarcel'
        }
    ]
}])