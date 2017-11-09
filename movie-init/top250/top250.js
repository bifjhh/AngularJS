(function (angular) {
    // "use strict";
    var myApp4 = angular.module('myApp4', ['ngRoute'])

        ; myApp4.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/top250',{
                templateUrl:'top250/top250.html'
                , controller: 'myController4'
            })
            
        }])
        ; myApp4.controller('myController4', ['$scope', '$http', '$routeParams', '$route', 'MyService', function ($scope, $http, $routeParams, $route, MyService) {
            /* $http.get('top250/data.json').then(function (res) {
                $scope.data = res.data;
            }) */
            // $scope.pageSize=20//每一页显示的数据条数
            //根据路由参数计算第几页
            ; $scope.page = ($routeParams.page || 1) - 0
                //  从第几条开始 当前锚点值 * 每页的条数 因为索引从0开始，所以 减去 一页的条数
                ; var start = $scope.page * 20 - 20

                ; MyService.jsonp('https://api.douban.com/v2/movie/top250', { start: start, count: 20 }, function (res) {
                    $scope.data = res
                        ; console.log($scope.data)
                        // 计算总的页数
                        ; $scope.total = Math.ceil(res.total / 20)
                        ; $scope.$apply()
                })
                // 创建翻页计算方法，通过点击时传入当前page+1或-1
                ; $scope.getPage = function (newPage) {
                    // 使用$route.updateParams 修改路由的参数，重新加载页面
                    $route.updateParams({ page: newPage })
                }

        }])
})(angular)