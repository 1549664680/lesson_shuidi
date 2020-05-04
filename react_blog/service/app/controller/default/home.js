'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'api hi';
  }
  async getArticleList() {
    let sql = 'select article.Id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "article.addTime as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ' +
      'from article left join type on article.type_id = type.id '
    const results = await this.app.mysql.query(sql)
    this.ctx.body = { data: results }
  }
  async getArticleById() {
    let id = this.ctx.params.id
    let sql = 'select article.Id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      'article.article_content as article_content,' +
      "article.addTime as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName,' +
      'type.id as typeId ' +
      'from article left join type on article.type_id = type.id ' +
      'WHERE article.Id=' + id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }
  async getTypeInfo() {
    const result = await this.app.mysql.select('type')
    this.ctx.body = { data: result }
  }
  async getListByid() {
    let id = this.ctx.params.id
    let sql = 'select article.Id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "article.addTime as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ' +
      'from article left join type on article.type_id = type.id '
      'where type_id='+id
    const result = await this.app.mysql.query(sql)
    this.ctx.body = { data: result }
  }
}

module.exports = HomeController;
