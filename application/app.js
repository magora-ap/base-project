(function () {
    angular.module('app', ['ui.router', 'app.note'])
        .config(function ($locationProvider) {
            $locationProvider.html5Mode(true);
        })
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('homepage', {
                    url: '/',
                    templateUrl: 'app.tpl.html'
                });
        });
})();