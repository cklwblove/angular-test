/**
 *
 * @authors liwenbo (you@example.org)
 * @date    2014/11/10 9:30
 * @version $
 */

/* App Module */

(function () {

    'use strict';

    var phonecatApp = angular.module('phonecatApp', [

        'ngRoute',
        'phonecatAnimations',
        'phonecatControllers',
        'phonecatFilters',
        'phonecatServices',


    ]);

    phonecatApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'phoneListController'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'phoneDetailController'
            }).
            when('/company', {
                templateUrl: 'partials/company.html',
                controller: 'getAllCompanyController'
            }).
            otherwise({
                redirectTo: '/phones'
            });

    }]);
})();

