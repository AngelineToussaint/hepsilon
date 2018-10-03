var app = angular.module('hepsilon', ['ngAnimate', 'LocalForageModule'])

// Config with routes
app.config(['$locationProvider', '$qProvider', '$localForageProvider', function($locationProvider, $qProvider, $localForageProvider) {
    $qProvider.errorOnUnhandledRejections(false);

    $localForageProvider.config({
        driver: 'localStorageWrapper',
        name: 'hepsilon',
        version: 1.0,
        storeName: 'hepsilon'
    })
}])


// Run
app.run(['$rootScope', '$sce', 'Utils', function ($rootScope, $sce, Utils) {
    $rootScope.trustAsHtml = $sce.trustAsHtml;
    $rootScope.siteName = 'HEPSILON';
    $rootScope.Utils = Utils;

    $rootScope.loading = true; // Load page
}])

// filters
app.filter('reverse', () => {
    return items => {
        return undefined != items ? items.slice().reverse() : null;
    };
});