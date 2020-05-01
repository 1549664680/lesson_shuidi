import React from 'react'
import '../public/style/components/header.css'
import {Row,Col,Menu} from 'antd'

const Header=()=>{
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">coderlan</span>
          <span className="header-txt">前端攻城狮</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" >
            <Menu.Item key="home">
              首页
            </Menu.Item>
            <Menu.Item key="video">
              视屏
            </Menu.Item>
            <Menu.Item key="lift">
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}
export default Header