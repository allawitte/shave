(function () {
    'use strict';

    angular
        .module('app')
        .factory('subscriptionService', subscriptionService);
    subscriptionService.$inject = ['$http'];

    function subscriptionService($http) {

        var service = {};
        service.makeSubscription = makeSubscription;

        function makeSubscription(data){
            return $http.post('/subscribe/', data);
        }

        return service;

    }
})();
/**
 * Created by HP on 4/11/2017.
 */
