console.log("主模块加载成功")
// config 可以指定依赖模块的的位置 写在模块的最顶端
// require.config({
//     paths: {
//         "jquery": "./jquery", 
//         "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min"//这里可以指定网址
//     }
// });
/**
 * 第一个参数是一个数组，表示依赖的模块
 * 第二个参数是回调函数 表示异步依赖模块以后执行的回调函数
*/
// require(['jquery'], function ($){
//     console.log($);
//     $('body').text(111111111111111)
//     $('body').css('background','rgba(111,111,111,.6)')
// });
require(['require.config'],function(){
    "use strict";
    require(["jquery",'math','minus'],function($,math,minus){
        // console.log($)
        $('body').text(222222222)
        var aaa = 1
        console.log(math.add(5,5));
        console.log(minus.minus(5,5));
    })
})