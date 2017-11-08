(function (angular) {
    // "use strict";
    // 模块
    var myApp2 = angular.module('myApp2', ['ngRoute'])

    // 路由
        ; myApp2.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/in_theaters',{
                templateUrl:'in_theaters/in_theaters.html'
                , controller: 'myController2'
            })
        }])

        // 在angular中使用ajax请求
        ; myApp2.controller('myController2', ['$scope', '$http', function ($scope,$http){
            $http.get('in_theaters/data.json').then(function(res){
                $scope.data=res.data;
            })
            /* 
              $http.get('https://api.douban.com/v2/movie/in_theaters?start=0&count=5').then(function(res){
                console.log(res)
                // $scope.data = res.subjects;
            })
            */
        }])
})(angular);