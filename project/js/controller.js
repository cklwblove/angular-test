/**
 *
 * @authors Administrator (you@example.org)
 * @date    2015/7/2 13:56
 * @version $
 */
var app = angular.module('app', []);

// 模块
app.controller('CartController', function($scope) {
    $scope.items = [
        {name: "雷柏（Rapoo） V500 机械游戏键盘 机械黄轴", quantity: 1, price: 199.00},
        {name: "雷柏（Rapoo） V20 光学游戏鼠标 黑色烈焰版", quantity: 1, price: 139.00},
        {name: "AngularJS权威教程", quantity: 2, price: 84.20}
    ];

    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    }
})