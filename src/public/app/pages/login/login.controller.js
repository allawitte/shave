(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['userService', '$state', '$rootScope', '$localStorage'];

    function loginController(userService, $state, $rootScope, $localStorage) {
        var vm = this;
        vm.login = login;

        function login(user){            
            userService.userAuth(user)
                .then(function (res) {
                        console.log('res',res);
                        $localStorage.user = res.data._id;
                        $rootScope.isLogged = true;
                            $state.go('view');
                    }
                    , function (err) {
                        console.log(err.message);
                        vm.userExists = true;
                    });
        }

    }
})();
/**
 * Created by HP on 4/10/2017.
 */
