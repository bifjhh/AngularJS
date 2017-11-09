(function (angular) {
    // "use strict";
    var myApp = angular.module('myApp', ['ngRoute', 'myApp1', 'myApp2', 'myApp3', 'myApp4','myjsonp'])
        ; myApp.directive('autoActive', ['$location', function ($location){
            return{
                link:function(scope,element,attributes){
                    // console.log(1);
                  /*   element.on('click',function(){
                        element.parent().children().removeClass('active')
                        ;element.addClass('active')
                    }) */
                    scope.loca = $location
                    ;scope.$watch('loca.url()',function(){
                        // console.log(123);
                        var hash =$location.url()
                        ;var val = element.find('a').attr('href').substr(1)
                        ;if(hash==val){
                            element.parent().children().removeClass('active')
                            ; element.addClass('active')
                        }
                    })
                }
            }
        }])
})(angular);

/* 
routeProvider
*/