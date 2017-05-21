"use strict";
var ModuleB = (function () {
    function ModuleB() {
    }
    ModuleB.prototype.display = function () {
        console.log('welcome to Module B !!!');
    };
    return ModuleB;
}());
exports.ModuleB = ModuleB;
