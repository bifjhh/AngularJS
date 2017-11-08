(function (angular) {
    // "use strict";
    var myApp3 = angular.module('myApp3', ['ngRoute'])
        ; myApp3.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/coming_soon',{
                templateUrl:'coming_soon/coming_soon.html'
                , controller: 'myController3'
            })
        }])
        ; myApp3.controller('myController3', ['$scope', '$http', function ($scope, $http) {
            $http.get('coming_soon/data.json').then(function (res) {
                console.log(res);
                $scope.data = res.data;
            })
            
        }])
})(angular);
