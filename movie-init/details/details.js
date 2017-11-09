(function(angular){
    var detailsApp = angular.module('detailsApp', ['ngRoute'])
        ; detailsApp.config(['$routeProvider', function ($routeProvider){
            $routeProvider.when('/details/:id',{
                
                templateUrl: './details/details.html',
                controller: 'detailsController'
            })
    }])  
        ; detailsApp.controller('detailsController', ['$scope', '$routeParams', 'MyService', function ($scope, $routeParams,MyService) {
            MyService.jsonp('http://api.douban.com/v2/movie/subject/' + $routeParams.id,{},function (data) {
                console.log(data);
                    $scope.data = data;
                    $scope.$apply();
                }) 
        }])
})(angular);