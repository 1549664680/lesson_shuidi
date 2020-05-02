import Head from 'next/head'
import { Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Header from '../components/Header'
import '../public/style/pages/detailed.css'
import Author from '../components/Author'
import Footer from '../components/Footer'
import Advert from '../components/Advert'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

export default function Detailed() {
  let markdown = '# P01:课程介绍\n'+'**这是加粗的文字**\n\n'+'# P02:初始化\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P03:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P04:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P05:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P06:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P07:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P08:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'# P09:继续\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n' +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n' +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n' +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n' +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n' +'**这是倾斜的文字*`\n\n'
  +'**这是加粗的文字**\n\n'
  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header/>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        <div>
          <div className="bread-div">
            <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">XX</a></Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <div className="detailed-tilte">
              Reacrt实战视频
            </div>
            <div className="list-icon centcer">
              <span><Icon type="calendar"/>2019-06-28</span>
              <span><Icon type="folder"/>视频教程</span>
              <span><Icon type="fire"/>3116人</span>
            </div>
            <div className="detailed-content"> 
              <ReactMarkdown
                source={markdown}
                escapeHtml={false}
              />
            </div>
          </div>
        </div>
        </Col>
        <Col className="comm-rigth" xs={0} sm={0} md={7} lg={5} xl={4}>
        <Author/>
        <Advert/>
        <Affix offsetTop={50}>
        <div className="detailed-nav comm-box">
          <div className='nav-title'>文章目录</div>
          <MarkNav
            className="article-menu"
            source={markdown}
            ordered={false}
          />
        </div>
        </Affix>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}
