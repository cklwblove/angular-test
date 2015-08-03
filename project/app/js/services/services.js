/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/8/3 9:21
 * @version $
 */

/* Services */

(function() {

    'use strict';

//var phonecatServices = angular.module('phonecatServices', ['ngResource']);
//
//phonecatServices.factory('Phone', ['$resource', function($resource) {
//    return $resource('/phones/:phoneId.json', {}, {
//        query: {method: 'get', params: {
//            phoneId: 'phones'
//        }, isArray: true}
//    })
//
//}]);

    var phonecatServices = angular.module('phonecatServices', ['ngResource']);

    phonecatServices.factory('Phone', ['$resource',
        function($resource){
            return $resource('phones/:phoneId.json', {}, {
                query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
            });
        }]);

    phonecatServices.factory('Company', ['$resource', function($resource) {
        return $resource('https://open.hs.net/iuc/v1/iuchttpservice/services/allcompany_get', {}, {
            query: {method: 'get'}
        });
    }]);
})();

