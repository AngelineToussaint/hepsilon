app.factory('Request', ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    return {
        post: (url, data) => {
            // Promise
            var deferred = $q.defer();

            var config = {
                headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
            }

            // Init data to send
            var data = $.param(data);

            $http.post(url, data, config)
                .then(res => {
                    deferred.resolve(res.data)
                }, error => {
                    deferred.reject(error)
                })

            return deferred.promise;
        },
        put: (url, data) => {
            var deferred = $q.defer();

            var config = {
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}
            }

            // Init data to send
            var data = $.param(data);

            $http.put(url, data, config)
                .then(res => {
                    deferred.resolve(res.data)
                }, error => {
                    deferred.reject(error)
                })

            return deferred.promise;
        },
        get: (url) => {
            var deferred = $q.defer();

            $http.get(url)
                .then(res => {
                    deferred.resolve(res.data)
                }, error => {
                    deferred.reject(error)
                })

            return deferred.promise;
        },
        delete: (url) => {
            var deferred = $q.defer();

            $http.delete(url)
                .then(res => {
                    deferred.resolve(res.data)
                }, error => {
                    deferred.reject(error)
                })

            return deferred.promise;
        }
    }
}])