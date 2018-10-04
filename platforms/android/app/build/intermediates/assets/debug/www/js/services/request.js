app.factory('Request', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    return {
        get: (url) => {
            var deferred = $q.defer();

            $http.get(url)
                .then(res => {
                    deferred.resolve(res.data)
                }, error => {
                    deferred.reject(error)
                })

            return deferred.promise;
        }
    }
}])