(function () {
    'use strict';

    angular
        .module('app')
        .factory('authService', authService);
    authService.$inject = ['$rootScope'];

    function authService($rootScope) {

        var service = {};
        service.cancelAuth = cancelAuth;

        function cancelAuth(){
            delete $rootScope.user;
        }
        
        return service;

    }
})();
/**
 * Created by HP on 4/10/2017.
 */
