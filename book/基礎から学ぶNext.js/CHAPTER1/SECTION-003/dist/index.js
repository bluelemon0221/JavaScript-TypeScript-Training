'use strict';

var exportedValue = 1;
var exportedFunction = function (input) {
    return input * 2;
};

console.log(exportedValue);
console.log(exportedFunction(128));
