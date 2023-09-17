new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('error');
    }, 1000);
})
    .then(
        function () { console.log('解決1'); },
        function (arg) { console.log(arg); }
    )
    .then(
        function () { console.log('解決2'); },
        function () { console.log('拒否2'); }
    )
    .catch(
        function() {
            console.log('キャッチ');
        }
    )