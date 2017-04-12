(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('view', {
                url: '/',
                controller: 'viewController',
                templateUrl: 'app/pages/view.html',
                controllerAs: 'vm',
                id: "view"
            })
            .state('login', {
                url: '/login',
                controller: 'loginController',
                templateUrl: 'app/pages/login/login.html',
                controllerAs: 'vm',
                id: "login"
            })
            .state('register', {
                url: '/register',
                controller: 'registerController',
                templateUrl: 'app/pages/register/register.html',
                controllerAs: 'vm',
                id: "register"
            })


    }
})();
/**
 * Created by HP on 1/12/2017.
 */
