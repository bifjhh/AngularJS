(function (angular) {
    // "use strict";
    var myApp4 = angular.module('myApp4', ['ngRoute'])

        ; myApp4.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/top250',{
                templateUrl:'top250/top250.html'
                , controller: 'myController4'
            })
            
        }])
        ; myApp4.controller('myController4', ['$scope', '$http', function ($scope, $http) {
            $http.get('top250/data.json').then(function (res) {
                $scope.data = res.data;
            })
            /* 
              $http.get('https://api.douban.com/v2/movie/in_theaters?start=0&count=5').then(function(res){
                console.log(res)
                // $scope.data = res.subjects;
            })
            */
        }])
})(angular)