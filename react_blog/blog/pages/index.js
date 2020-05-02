import Head from 'next/head'
import React, { useState } from 'react'
import { List, Row, Col ,Icon} from 'antd'
import Header from '../components/Header'
import'../public/style/pages/index.css'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Home(list) {
  const [mylist, setMyLsit] = useState(list.data)
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>最新日志</div>}
            dataSource={mylist}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span> <Icon type="calendar"/>{item.addTime}</span>
                  <span> <Icon type="folder"/>{item.typeName}</span>
                  <span> <Icon type="fire"/>{item.view_count}人</span>
                </div>
                <div className="list-context">{item.content}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-rigth" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}
Home.getInitialProps = async()=>{
  const promise = new Promise((resolve) =>{
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res)=>{
        resolve(res.data)
      }
    )
  })
  return await promise
}
