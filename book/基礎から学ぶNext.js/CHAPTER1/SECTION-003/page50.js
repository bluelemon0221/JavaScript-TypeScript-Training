"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fetch_1 = require("node-fetch");
(0, node_fetch_1.default)('https://api.publicapis.org/entries').then(function (response) {
    console.log(response);
});
console.log('next process');
