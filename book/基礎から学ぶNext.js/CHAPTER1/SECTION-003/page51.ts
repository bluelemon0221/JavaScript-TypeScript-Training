import fetch from "node-fetch";

fetch('https://api.publicapis.org/entries')
    .then((responce) => {
        return responce.json();
    })
    .then((json) => {
        console.log(json);
    })