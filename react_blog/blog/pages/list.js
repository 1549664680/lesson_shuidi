import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { List, Row, Col, Icon, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Link from 'next/link'

export default function MyList(list) {
  const [mylist, setMyLsit] = useState(list.data)
  useEffect(()=>{
    setMyLsit(list.data)
  })
  return (
    <div>
      <Head>
        <title>MyList</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>视频教程</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>最新日志</div>}
            dataSource={mylist}
            itemLayout="vertical"
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                    <a>
                      {item.title}
                    </a>
                  </Link>
                </div>
                <div className="list-icon">
                  <span> <Icon type="calendar" />{item.addTime}</span>
                  <span> <Icon type="folder" />{item.type}</span>
                  <span> <Icon type="fire" />{item.view_count}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-rigth" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}
MyList.getInitialProps  = async (ctx) => {
  let id = ctx.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListByid + id).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return await promise
}