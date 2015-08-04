/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/7/31 16:49
 * @version $
 */

/* Controllers */

(function () {

    'use strict';

    var phonecatControllers = angular.module('phonecatControllers', []);

    phonecatControllers.controller('phoneListController', ['$scope', 'Phone', function($scope, Phone) {
        $scope.phones = Phone.query();
        console.log($scope.phones);
        $scope.orderProp = 'age';
    }]);

    phonecatControllers.controller('phoneDetailController', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);


    phonecatControllers.controller('getAllCompanyController', ['$scope', 'Company', function($scope, Company) {
        //console.log(Company.query());
        Company.get(function(company) {
            $scope.companies = company.data;
        });

        $scope.orderProp = 'company_id';
    }]);

})();
