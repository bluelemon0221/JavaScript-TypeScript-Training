var stringList = ['hoge', 'huga'];
stringList.forEach(function (str, index) {
    console.log("".concat(index, ": ").concat(str));
});
var newList = stringList.map(function (str, index) {
    return str.replace('g', 'ggg');
});
console.log(newList);
