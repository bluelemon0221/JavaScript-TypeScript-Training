import fetch from 'node-fetch';

fetch('https://api.publicapis.org/entries').then((response) => {
    console.log(response);
});

console.log('next process');