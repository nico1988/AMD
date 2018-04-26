// 对象写法
var o = {
    _count:0,
    m1:function(){
        this._count++
        console.log(this._count)
    },
    m2:function(){
        this._count++
        console.log(this._count)
    }
}
o.m1()
o.m2()