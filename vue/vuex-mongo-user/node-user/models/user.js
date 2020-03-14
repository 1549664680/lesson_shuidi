const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// Schema: 一种以文件形式存储的数据库模型骨架，不具备数据库的操作能力
const userSchema = new Schema({
  "address": {
    "city": {
      type: String, 
    },
    "state": {
      type: String
    },
    "pincode": {
      type: String
    }
  },
  "tags": [
    {type: String}
  ],
  "name": { type: String }
})

const User = mongoose.model('User', userSchema);
// Model: 由Schema发布生成的模型，具有抽象属性和数据库操作能力?
module.exports = User