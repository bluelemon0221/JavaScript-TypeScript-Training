const PORT = 8800;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();


//ウェブスクレイパーを作ろう
const URL = "https://search.rakuten.co.jp/search/mall/keyboard/";
const data = []

axios(URL)
.then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);
    $(".searchresultitem", htmlParser).each(function() {
        const title = $(this).find("h2").text();
        const price = $(this).find(".price--OX_YW").text();
        data.push({title, price});
        console.log(data);
    });
}).catch(error => console.log(error));


app.listen(PORT, console.log("server running!"));