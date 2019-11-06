//fileSystem 内置模块
const fs = require('fs');
const AipImageClassifyClient = require("baidu-aip-sdk").imageClassify;
// console.log('hello node');
const image = fs.readFileSync("car.jpg").toString("base64");//base64图片格式
// console.log(image);
var client = new AipImageClassifyClient('17711749','lYDhYH4mF3nQ2hZl18gGmtPL','G0riwgEHsgTPgeUb3zFOv5vQuWSsGM0E');
client
    .carDetect(image)
    .then(function(result){
        console.log(result);
    })
// AipImageClassifyClient
// 回调函数
// 文件在哪里？磁盘里
// js 在哪里运行？  内存之中  I/O操作
// fs.readFile('./text.txt',function(err,data){
//     if(err){
//         return console.log(err);
//     }
// console.log(data.toString());//直接输出data，会出现buffer流
// });