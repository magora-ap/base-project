(function () {

    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    function config($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('homepage', {
                url: '/',
                templateUrl: 'app.tpl.html'
            });
    }
})();