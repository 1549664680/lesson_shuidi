const request = require('request-promise')
const cheerio = require('cheerio')
const fs = require('fs')
const main= async() => {
    //进程
    let html = await request({
        url:'https://movie.douban.com/top250'
        // https://movie.douban.com/top250?start=0&filter=

    })
    // console.log(html)
    let $ = cheerio.load(html)//内存之中构建dom $就相当于document.querySelector
    let movieNodes =  $('#content .article .grid_view').find('.item')   
    // console.log(movieNodes);
    let movies = [] 
    for (let i = 0; i < movieNodes.length; i++){
        let item = cheerio.load(movieNodes[i])
        let titles = $('.info .hd span')
        titles = ([]).map.call(titles,t =>{
            return $(t).text()
        })
        // console.log(titles);
        let bd = $('.info .bd')
        let info = bd.find('p').text()
        let score = bd.find('.star .rating_num').text();
        movies.push({
            'titles': titles,
            'info':info,
            'score':score
        })
    }
    console.log(movies)
    fs.writeFile('./output.json',JSON.stringify(movies),'utf-8',(err)=>{
        if(err){
            console.log('写入失败')
        } console.log('生成json文件成功，爬取完成')

    })
}
main();