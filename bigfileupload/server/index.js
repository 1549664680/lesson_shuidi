const path = require('path'); // 路劲
const fse = require('fs-extra'); // fs 拓展包

const UPLOAD_DIR = path.resolve(__dirname, '.', "target")
// console.log(UPLOAD_DIR)
const filename = 'yb'
const filePath = path.resolve(UPLOAD_DIR, '..',`${filename}.jpeg`);
// console.log(filePath)
const pipeStream = (path, writeStream) =>
  new Promise(resolve => {
    const readStream = fse.createReadStream(path);
    readStream.on('end', () =>{
      fse.unlinkSync(path);
      resolve();
    })
    readStream.pipe(writeStream);
  })
const mergeFileChunk = async(filePath, filename, size) =>{
  // 大文件上传时， 设计的后端思想是 每个要上传的文件 先以文件名为target 目录名， 把分文件 blob ，放入这个目录
  // 文件上传前要加上index 
  const chunkDir = path.resolve(UPLOAD_DIR, filename);
  const chunkPaths = await fse.readdir(chunkDir);
  chunkPaths.sort((a, b) => a.split('-')[1]-b.split('-')[1]);
  // 每块内容写入最后文件 promise
  await Promise.all(
    chunkPaths.map((chunkPath, index) =>
      pipeStream(
        path.resolve(chunkDir, chunkPath),
        fse.createWriteStream(filePath,{
          start:index * size,
          end: (index + 1) * size
        })
      )
    )
  )
  console.log('文件合并成功')
  fse.rmdirSync(chunkDir);
}
mergeFileChunk(filePath, filename,0.5*1024*1024); // 合并文件