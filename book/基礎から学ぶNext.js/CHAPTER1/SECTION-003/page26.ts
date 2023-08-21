const stringList: string[] = ['hoge', 'huga'];
stringList.forEach(function (str, index) {
    console.log(`${index}: ${str}`);
});

const newList = stringList.map(function (str, index) {
    return str.replace('g', 'ggg');
})
console.log(newList);