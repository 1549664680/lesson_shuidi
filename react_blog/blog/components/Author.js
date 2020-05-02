import React, { Component } from 'react';
import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'
const Author = ()=>{
  return (
    <div className="author-div comm-box"> 
      <div><Avatar size={100} src="https://c-ssl.duitang.com/uploads/item/201511/21/20151121171107_zMZcy.thumb.1000_0.jpeg"/></div>
      <div className="author-introduction">
        前端攻城狮，大三在读。
      </div>
      <Divider>社交账号</Divider>
      <Avatar size={28} icon="github" className="account"/>
      <Avatar size={28} icon="qq" className="account"/>
      <Avatar size={28} icon="wechat" className="account"/>
      <Divider>Avengers</Divider>
    </div>
  )
}

export default Author