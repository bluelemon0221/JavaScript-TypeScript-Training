const timer = (time, text) => new Promise(resolve => {
    setTimeout(() => {
        console.log(text);
        resolve();
    }, time);
});

timer(500, '処理1')
    .then(() => timer(600, '処理2'));