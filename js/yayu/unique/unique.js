// 数组去重
/**
 * 
 * @param {array} arr 
 * @return {Array}
 */
//function unique(arr){   es5
//function 关键字没有,
// es6 键头函数 （）=>{}
let fn;

console.log(typeof fn);//类型 undefined 未定
fn=null;
console.log(typeof fn);
fn=()=>{};
console.log(typeof fn);//类型 function 
const unique = (arr) =>{
    let res=[];//数组
    for(var i=0,arrLen=arr.length;i<arrLen;i++){
        var currnet=arr[i];//基地 局部变量（运行完就会销毁,不会占用内存），缓存值 ，只用访问一次arr[]
        if(res.indexOf(currnet)==-1){
            res.push(currnet);
        }
    }
    // for(var i=0;i<arr.length;i++){
    //     //如果在res数组中就不加入
    //     //let isIn=false;
    //     for(var j=0;j<res.length;j++){
    //         if(arr[i]===res[j]){
    //            // isIn=true;
    //             break;
    //         }
    //     }
    //     //没有出现？
    //    // if(!isIn){
    //         //res.push(arr[i]);
    //    // }
    //    if(j===res.length){
    //     res.push(arr[i]);
    //    }
    //     //否者push res
    // }
    return res;
}
var arr=['1',2,3,2,4,1];
console.log(unique(arr));
console.log(typeof unique == 'function'&& unique(arr));
