"use strict";
var ModuleA = (function () {
    function ModuleA() {
    }
    ModuleA.prototype.display = function () {
        console.log('welcome to Module A !!!');
    };
    return ModuleA;
}());
exports.ModuleA = ModuleA;
