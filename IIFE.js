var module1 = (function(){
    var _count = 0;
    var m1 = function(){
        return this._count // 这里写this module取不到这个this 回是undefined
    };
    var m2 = function(){
        return _count
    };
    return {
    　　m1 : m1,
    　　m2 : m2
    };
})();

console.log(module1.m1())
console.log(module1.m2())

// 放大模式  把module1放大到module2
var module2 = (function (mod) {
    mod.m3 = 1
    return mod
})(module1)
console.dir(module2.m1())
console.dir(module2.m2())
console.dir(module2.m3)

/**
 * 宽松放大模式
 * 这里没有module4
 * node 环境下暂时用global
 */
var module3 = (function(mod){
    mod.m4 = 4
    return mod
})(global.module4 || {}) 
console.log(module3.m4)