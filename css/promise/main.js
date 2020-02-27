const fs = require('./node_modules/fs');
// fs.readFile('./d.txt',function(err,res){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(res.toString());
// })
function readFile(){
    const aFile = fs.readFileSync('a.txt');
    console.log(aFile.toString());
    const bFile = fs.readFileSync('b.txt');
    console.log(bFile.toString());
    const cFile = fs.readFileSync('c.txt');
    console.log(cFile.toString());
}
readFile();