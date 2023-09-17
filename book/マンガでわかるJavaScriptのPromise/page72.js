const timerB = (time) => new Promise(resolve => {
    setTimeout(() => {
        resolve(`end:${time}`);
    }, time);
});

timerB(500)
.then(val => {
    console.log(val);
});

