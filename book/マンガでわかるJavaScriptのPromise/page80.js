const timer = (time, text) => new Promise(resolve => {
    setTimeout(() => {
        console.log(text);
        resolve();
    }, time);
});
const timerB = (time) => new Promise(resolve => {
    setTimeout(() => {
        resolve(`end:${time}`);
    }, time);
});

const func = async function() {
    const res1 = await timerB(500, '1');
    const res2 = await timerB(500, '2');
    console.log(res1,res2);
};
func();

new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject();
    },1000);
})
.then(
    function() {
        console.log('解決');
    },
    function() {
        console.log('失敗');
    }
);

