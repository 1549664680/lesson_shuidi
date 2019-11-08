const TULING = require('tuling');


const aiTuling = new TULING({
    key:'ef921ef9d0a84a638eb857f7f2cee266'
});
//立即执行函数
(async () =>{
    //async机器人
    // console.log(' sds0');
    const result = await aiTuling.send({
        userid:1,
        info:'今天的天气',
        loc:'南昌市'
    });
    console.log(result);
})()
// console.log(func);
// func();
