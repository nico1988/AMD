require.config({
    // RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
    baseUrl: "./js",
    paths: {
        jquery:"./jquery",
        math:'./math',
        minus:'./minus'
    }
    // shim : {
    //     modal     : {
    //         deps   : ["jquery", "transition"],
    //         exports: "modal"
    //     }
    // }
});