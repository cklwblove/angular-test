/**
 *
 * @authors liwenbo (you@example.org)
 * @date    2014/11/10 9:30
 * @version $
 */

angular.module('phonecat',[]).config(
    ['$routeProvider', function(){
        $routeProvider
            .when('/phones',{templateUrl: 'particals/phone-list.html',controller: phoneListCtrl})
            .when('/phones/:phoneId',{templateUrl: 'particals/phone-detail.html',controller: phoneDetailCtrl})
            .otherwise({redirectTo: '/phones'});
    }]
)

var jsonData = {
    "name": "Nicholas",
    "age": 29,
    "school": {
        "name": "Merrimack College",
        "location": "North Andover, MA"
    }
}

//  私有令牌，进行证券交易，期货交易，当然也可以访问公有令牌访问的所有资源
var privateAccessToken = '03F2DB261C3D4C07B86B4218FE978E302015072810082585269951';

function loadAjax(url, data, method, successfn, async) {
    async = (async === null || async === "" || typeof(async) === "undefined") ? "true" : async
    method = (method === null || method === "" || typeof(method) === "undefined") ? "post" : method;
    data = (data === null || data === "" || typeof(data) === "undefined") ? {"date": new Date().getTime()} : data;

    $.ajax({
        url: url,
        async: async,
        data: data,
        type: method,
        dataType: "json",
        headers: {
            Authorization: 'Bearer ' + this.privateAccessToken
        },
        success: function (d) {
            successfn(d);
        }
    });
}