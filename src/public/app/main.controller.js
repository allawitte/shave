(function () {
    'use strict';

    angular
        .module('app')
        .run(run)
        .controller('MainController', MainController);

    run.$inject = ['$localStorage', '$state', '$rootScope'];
    function run($localStorage, $state, $rootScope) {
        console.log('function run');
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

            if (notLoggedIn() && notAuthPage(toState.url)) {
                event.preventDefault();
                return $state.go('login');
            }
            return;
        });

        function notAuthPage(url) {
            if (url != '/login' && url != '/register') {
                return true;
            }
            return false;
        }

        function notLoggedIn() {
            if ($localStorage.user) {
                return false
            }
            else return true;
        }

    }

    MainController.$inject = ['$scope', 'authService', '$rootScope', '$state', '$localStorage'];

    function MainController($scope, authService, $rootScope, $state, $localStorage) {
        var vm = this;
        vm.goTo = goTo;
        $scope.logOut = logOut;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.bg = toState.id;
            if(fromState.url === '/login'){
                $rootScope.isLogged = true;
            }
            console.log('toState', toState);
            $scope.currentNavItem = toState.id;
        });

        if ($localStorage.user) {
            $rootScope.isLogged = true;
        }


        function logOut() {
            authService.cancelAuth();
            $rootScope.isLogged = false;
            $state.go('view');
        }

        function goTo(location){
            $state.go(location);
        }



    }

})();
/**
 * Created by HP on 1/12/2017.
 */
