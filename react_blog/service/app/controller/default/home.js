'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api hi';
  }
  async getArticleList(){
    let sql = 'select article.Id as id,'+
              'article.title as title,'+
              'article.article_content as content,'+
              "article.addTime as addTime,"+
              'article.view_count as view_count,'+
              'type.typeName as typeName '+
              'from article left join type on article.type_id = type.id'
     const results = await this.app.mysql.query(sql)
     this.ctx.body = {data:results}
  }
}

module.exports = HomeController;
