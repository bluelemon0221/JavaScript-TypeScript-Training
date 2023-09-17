
new Promise(function(resolve) {
    setTimeout(function() {
        console.log('処理1');
        resolve();
    }, 500);
})
.then(function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('処理2');
            resolve('処理2');
        }, 600);
    });
})
.then(function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('処理3');
            resolve();
        }, 700);
    });
})
.then(function() {
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log('処理4');
            resolve();
        }, 800);
    });
})
.then(function() {
    console.log('終了');
});

console.log('hoge');

setTimeout(function() {
    console.log('完了');
}, 3000);