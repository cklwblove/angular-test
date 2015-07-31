/**
 *
 * @authors liwenbo (you@example.org)
 * @date    2014/11/10 9:30
 * @version $
 */

'use strict';



/* App Module */

var phonecatApp = angular.module('phonecatApp', [

    'ngRoute',
    'phonecatControllers',
    // filters
    'businessEnFilters',
    'companyStatusFilters'
]);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'phoneListCtroller'
        }).
        when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'phoneDetailCtroller'
        }).
        otherwise({
            redirectTo: '/phones';
        });

}]);
