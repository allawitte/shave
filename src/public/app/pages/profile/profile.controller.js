(function () {
    'use strict';
    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['subscriptionService', '$state', '$rootScope', '$localStorage'];

    function profileController(subscriptionService, $state, $rootScope, $localStorage) {
        var vm = this;
        vm.user = $localStorage.user;
        vm.unSubscribe = unSubscribe;

        function unSubscribe(subscriptionId) {
            subscriptionService.unSubscribe({
                subscriptionId: subscriptionId,
                userId: vm.user
            })
                .then(function (respond) {
                        console.log(respond);
                    }
                    , function (err) {
                        console.log(err);
                    })
        }

        subscriptionService.getUserSubscriptions(vm.user)
            .then(function (respond) {
                    vm.subscriptions = respond.data;
                    console.log(vm.subscriptions);
                }
                , function (err) {
                    console.log(err);
                });


    }
})();
/**
 * Created by HP on 4/17/2017.
 */
