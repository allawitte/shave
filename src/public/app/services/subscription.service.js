(function () {
    'use strict';

    angular
        .module('app')
        .factory('subscriptionService', subscriptionService);
    subscriptionService.$inject = ['$http'];

    function subscriptionService($http) {

        var service = {};
        service.makeSubscription = makeSubscription;
        service.getUserSubscriptions = getUserSubscriptions;
        service.unSubscribe = unSubscribe;

        function unSubscribe(subscriptionId){
            return $http.put('/subscriptions/' + subscriptionId);
        }

        function makeSubscription(data){
            return $http.post('/subscribe/', data);
        }
        
        function getUserSubscriptions(userId) {
            return $http.get('/subscriptions/'+userId);
        }

        return service;

    }
})();
/**
 * Created by HP on 4/11/2017.
 */
