// math.js
define('math',['jquery'], function($, factory) {
    'use strict';
    var add = function(x,y){
        return x+y
    }
    console.log($.fn)
    return {add:add}
});