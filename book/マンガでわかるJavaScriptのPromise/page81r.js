const timer = (time, text) => new Promise(resolve => {
    setTimeout(() => {
        console.log(text);
        resolve();
    }, time);
});

const func = async function() {
    await timer(500, '処理1');
    await timer(600, '処理2');
    await timer(700, '処理3');
    await timer(800, '処理4');
    console.log('終了');
};
func();