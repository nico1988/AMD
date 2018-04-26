define('minus',[
    'jquery',
], function(jquery) {
    'use strict';
    console.log(1);
    var minus = function(x,y){
        return x - y;
    }
    return {minus:minus}
});