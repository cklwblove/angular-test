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
        $scope.orderProp = 'age';
    }]);

    phonecatControllers.controller('phoneDetailController', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function(imageUrl) {
            console.log('setImage');
            $scope.mainImageUrl = imageUrl;
        }
    }]);


    phonecatControllers.controller('getAllCompanyController', ['$scope', 'Company', function($scope, Company) {
          console.log(Company.query())
        $scope.companies = Company.query();
        //$http.get('https://open.hs.net/iuc/v1/iuchttpservice/services/allcompany_get').success(function(d) {
        //    $scope.companies = d.data;
        //});

        $scope.orderProp = 'company_id';
    }]);

})();
