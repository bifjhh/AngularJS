(function (angular) {
    // "use strict";
    // 模块
    var myApp2 = angular.module('myApp2', ['ngRoute'])

        // 路由
        ; myApp2.config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/:movieType/:page?', {
                templateUrl: 'in_theaters/in_theaters.html'
                , controller: 'myController2'
            })
        }])

        // 在angular中使用ajax请求
        ; myApp2.controller('myController2', ['$scope', '$http', '$routeParams', '$route', 'MyService', function ($scope, $http, $routeParams,$route,MyService) {
    /*   

         $http.get('in_theaters/data.json').then(function(res){
                 $scope.data=res.data;
             }) 
    */
            //  创建用于记录loading显示隐藏的数据
            ;$scope.loading=true
            // $scope.pageSize=20//每一页显示的数据条数
             //根据路由参数计算第几页
             ;$scope.page=($routeParams.page||1)-0
            //  从第几条开始 当前锚点值 * 每页的条数 因为索引从0开始，所以 减去 一页的条数
            ; var start = $scope.page * 20 - 20

            ; MyService.jsonp('https://api.douban.com/v2/movie/' + $routeParams.movieType, { start: start, count:20},function(res){
                // console.log(res);
                $scope.data=res
                // 计算总的页数
                ; $scope.total = Math.ceil(res.total / 20)
                ;$scope.loading = false;
                ; $scope.$apply()
            })
            // 创建翻页计算方法，通过点击时传入当前page+1或-1
            ;$scope.getPage=function(newPage){
                // 使用$route.updateParams 修改路由的参数，重新加载页面
                if (newPage < 1 || newPage > $scope.total) {
                    return;
                }
                ;$route.updateParams({page:newPage})
            }

        }])
})(angular);