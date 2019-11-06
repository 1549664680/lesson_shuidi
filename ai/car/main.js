const fs = require('fs');
const AipOcrClient = require("baidu-aip-sdk").ocr;
// console.log('hello node');
const image = fs.readFileSync("chepai.jpg").toString("base64");//base64图片格式
// console.log(image);
var client = new AipOcrClient('17712421','8cA0vqTzPY9CoDT1shpl7IpO','gG8GX9RGpeIhWNHE1dHyPf824FbZBUYY');
const options = {};
options["multi_detect"] = "true";

client.licensePlate(image,options)
    .then(function(result){
        console.log(result);
    })