'use strict';
(function () {
    'use strict';

    angular
        .module('app')
        .controller('viewController', viewController);

    viewController.$inject = ['$rootScope', '$state', 'subscriptionService', '$localStorage'];

    function viewController($rootScope, $state, subscriptionService, $localStorage) {
        var vm = this;
        vm.subscribe = subscribe;
        vm.items = [
            {
                art: '01',
                img: 'img/images1.jpg',
                name: 'shaver',
                description: 'shavers set for 1 month',
                price: 25
            },
            {
                art: '02',
                img: 'img/images2.jpg',
                name: 'shaver 2 in 1',
                description: 'shaver and gel set for 1 month',
                price: 35
            },
            {
                art: '03',
                img: 'img/images.jpg',
                name: 'shaver 3 in 1',
                description: 'shavers, gel and cream set for 1 month',
                price: 45
            },
        ];

        function subscribe(article){
            var data = {
                userId: $localStorage.user,
                article: article
            }
            subscriptionService.makeSubscription(data)
                .then(function(res){
                    console.log(res);
                }
                ,function(err){
                        console.log(err);
                    });
        }


    }
})();
/**
 * Created by HP on 4/10/2017.
 */
