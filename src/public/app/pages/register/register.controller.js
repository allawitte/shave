(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['userService', '$state', '$localStorage', '$rootScope'];

    function registerController(userService, $state, $localStorage, $rootScope) {
        var vm = this;
        vm.isDidabled = isDidabled;
        vm.save = save;

        function isDidabled(err1, err2) {
            return !(JSON.stringify(err1) == "{}" && JSON.stringify(err2) == "{}")
        }

        function save(user) {
            user.account = 0;
            userService.userCreate(user)
                .then(function (res) {
                    console.log('res', res);
                        $localStorage.user = res.data._id;
                        $rootScope.isLogged = true;
                            $state.go('view');
                    }
                    , function (err) {
                        if (err.status == 433) {
                            vm.userExists = true;
                            console.log('User already exists');
                        }
                        console.log(err);
                    })
        }

    }
})();
/**
 * Created by HP on 4/10/2017.
 */
