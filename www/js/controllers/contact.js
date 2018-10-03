app.controller('ContactCtrl', ['$scope', '$rootScope', '$localForage', 'Request', function ($scope, $rootScope, $localForage, Request) {

    $scope.schoolSelected = ''

    $scope.selectSchool = function (school){
        $scope.schoolSelected = (school != $scope.selectSchool()) ? school : ''
    }

    $scope.school = [
        {
            name : 'EPSI',
            mailAddress : 'info@nantes-epsi.fr',
            phone : '02 40 76 60 87',
            site : 'http://www.epsi.fr/campus/campus-de-nantes/',
            picture : 'epsi',
        },
        {
            name : 'IDRAC',
            mailAddress : 'http://www.my-admission.com/formulaire.aspx?marque=idranan&id=3108',
            phone : '02 40 29 38 14',
            site : 'http://www.ecoles-idrac.com/campus/campus-nantes/',
            picture : 'idrac',
        },
        {
            name : 'IFAG',
            mailAddress : 'nantes@ifag.com',
            phone : '02 85 52 64 41',
            site : 'http://www.ifag.com/campus/campus-de-nantes/',
            picture : 'ifag',
        },
        {
            name : 'IGEFI',
            mailAddress : 'http://www.igefi.net/candidature/',
            phone : '02 85 52 40 18',
            site : 'http://www.igefi.net/campus/nantes/',
            picture : 'igefi',
        },
        {
            name : 'OPEN SOURCE SCHOOL',
            mailAddress : 'contact@opensourceschool.fr',
            phone : '02 85 52 30 45',
            site : 'http://www.opensourceschool.fr/',
            picture : 'openSourceSchool',
        },
        {
            name : 'SUP\'DE COM',
            mailAddress : 'NANTES@ECOLES-SUPDECOM.COM',
            phone : '02 72 34 18 12',
            site : 'http://www.ecoles-supdecom.com/campus/nantes/',
            picture : 'supDeCom',
        },
        {
            name : 'WIS',
            mailAddress : 'http://www.my-admission.com/formulaire.aspx?marque=epsinantes&id=3385',
            phone : '02 40 76 60 87',
            site : 'http://www.wis-ecoles.com/campus/campus-de-nantes/',
            picture : 'wis',
        }
    ]
}])