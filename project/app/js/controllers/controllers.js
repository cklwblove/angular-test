/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/7/31 16:49
 * @version $
 */

'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('phoneListController', function($scope, $http) {
    //$scope.phones = [
    //    {'name': 'Nexus S',
    //        'snippet': 'Fast just got faster with Nexus S.'},
    //    {'name': 'Motorola XOOM™ with Wi-Fi',
    //        'snippet': 'The Next, Next Generation tablet.'},
    //    {'name': 'MOTOROLA XOOM™',
    //        'snippet': 'The Next, Next Generation tablet.'}
    //];
    $http.get('data/phones.json').success(function(d) {
        $scope.phones = d;
    });

    $scope.orderProp = 'age';
});

phonecatControllers.controller('getAllCompanyController', ['$scope', '$http', function($scope, $http) {
    //loadAjax('https://open.hs.net/iuc/v1/iuchttpservice/services/allcompany_get', "", "get", function(d) {
    //    companies = d.data;
    //}, false);
    $http.get('https://open.hs.net/iuc/v1/iuchttpservice/services/allcompany_get').success(function(d) {
        $scope.companies = d.data;
    });


}]);