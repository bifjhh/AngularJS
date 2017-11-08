(function (angular) {
    // "use strict";
    var myApp1 = angular.module('myApp1', ['ngRoute'])
        ; myApp1.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/home_page',{
                templateUrl:'home/home.html'
            })
        }])
})(angular);