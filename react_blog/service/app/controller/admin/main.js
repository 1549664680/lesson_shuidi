'use strict'
const Controller = require('egg').Controller
class MainController extends Controller {
  async checkLogin() {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql = "select userName from admin_user where userName = '" + userName + "'and password = '" + password + "'"
    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = { "openId": openId }
      this.ctx.body = { "data": true, 'openId': openId }
    } else {
      this.ctx.body = { "data": false }
    }
  }
  async getTypeInfo() {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = { data: resType }
  }
  async addArticle() {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1

    const insertId = result.insertId
    this.ctx.body = {
      isSuccess: insertSuccess,
      insertId: insertId
    }
  }
  async updateArticle() {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.update('article', tmpArticle)
    const updateSuccess = result.affectedRows === 1
    this.ctx.body = {
      isSuccess: updateSuccess,
    }
  }
  async getArticleList() {
    let sql = 'select article.Id as id,' +
      'article.title as title,' +
      'article.introduce as introduce,' +
      "article.addTime as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName ' +
      'from article left join type on article.type_id = type.id ' +
      'order by article.id desc'
    const resList = await this.app.mysql.query(sql)
    this.ctx.body={
      list:resList
    }
  }
  async delArticle(){
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete('article',{'id':id})
    this.ctx.body = {
      data:res
    }
  }
  async getArticleById(){
    let id = this.ctx.params.id
    let sql = 'select article.Id as id,' +
      'article.title as title,' +
      'article.article_content as content ,' +
      'article.introduce as introduce,' +
      "article.addTime as addTime," +
      'article.view_count as view_count,' +
      'type.typeName as typeName, ' +
      'type.id as typeId ' +
      'from article left join type on article.type_id = type.id ' +
      'where article.id = ' +id
      const result = await this.app.mysql.query(sql)
      this.ctx.body={
        data:result
      }
  }
}
module.exports = MainController