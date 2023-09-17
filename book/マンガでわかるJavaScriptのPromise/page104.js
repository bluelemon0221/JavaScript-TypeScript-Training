
const timer = (time, type) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (type === 'resolve') {
                resolve(`${time} 解決`);
            }
            if (type === 'reject') {
                reject(`${time} 拒否`);
            }
        }, time);
    });
};


// (async function() {
//     try {
//         const res1 = await timer(500, 'resolve');
//         console.log(res1);

//         const res2 = await timer(600, 'reject');
//         console.log(res2);

//         const res3 = await timer(700, 'resolve');
//         console.log(res3);
//     } catch(e) {
//         console.log(e);
//     }
//     console.log('終了');
// })();

// (async function() {
//     const array = [
//         timer(500, 'resolve'),
//         timer(600, 'resolve'),
//         timer(700, 'resolve')
//     ];
//     const res = await Promise.all(array);
//     console.log('res:', res);
// })();


// (async function() {
//     const array = [
//         timer(500, 'resolve'),
//         timer(600, 'reject'),
//         timer(700, 'resolve')
//     ];
//     try {
//         const res = await Promise.all(array);
//         console.log('res:', res);
//     } catch(error) {
//         console.log('error:', error);
//     }
// }());


// Promise.allSettled([
//     500,
//     timer(600, 'resolve'),
//     timer(700, 'reject'),
//     timer(800, 'resolve')
// ])
// .then(
//     val => console.log('〇', val),
//     val => console.log('✕', val)
// );


Promise.all([
    Promise.resolve(100),
    Promise.resolve(200),
    Promise.reject(300)
])
.then(
    val => console.log('〇', val),
    val => console.log('✕', val)
);
