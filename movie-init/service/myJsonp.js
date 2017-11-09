/* 
将jsonp这一块的东西放到服务里面
把这个服务放到一个独立的模块里面 
将创建好的js文件引入到HTML中
将服务模块添加到主模块内
然后在需要发送请求的js文件内（各个子模块）调用服务方法
*/

(function (angular) {
    var myjsonp = angular.module('myjsonp', [])
        ; myjsonp.service('MyService', [function () {
            this.jsonp = function (src, arg, callback) {
                /*  src url地址
                    arg 参数
                    callback 回调函数
                 */
                // 拼接随机生成函数名
                var fnName = 'jsonp_' + (('' + Math.random()).substring(2));
                //因为从后台返回的js代码那个函数的调用是全局的
                window[fnName] = callback;
                // 动态创建script标签
                var oScript = document.createElement('script');
                // 将url地址和函数名拼接在一起
                var mySrc = src + '?callback=' + fnName;
                // 使用for in 循环 将请求的参数拼接到请求地址后面
                for (var k in arg) {
                    mySrc += '&' + k + '=' + arg[k];
                }
                // 设置动态生成的script标签的src属性为拼接好的请求
                oScript.src = mySrc;
                // 将动态生成的script标签添加到页面中
                document.body.appendChild(oScript);
            }
        }])
})(angular);
