import React, { useState, useEffect } from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker, message } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
const { Option } = Select
const { TextArea } = Input


function AddArticle(props) {
  const [articleId, setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('')   //文章标题
  const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd, setIntroducemd] = useState()            //简介的markdown内容
  const [introducehtml, setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [showDate, setShowDate] = useState()   //发布日期
  const [updateDate, setUpdateDate] = useState() //修改日志的日期
  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType, setSelectType] = useState('请选择文章类型') //选择的文章类别
  useEffect(() => {
    getTypeInfo()
    let id = props.match.params.id
    if(id){
      setArticleId(id)
      getArticlebyId(id)
    }
  }, [])
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    break: false,
    smartLists: true,
    smartypants: false
  })

  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }
  const getTypeInfo = () => {
    axios({
      method: 'get',
      url: servicePath.getTypeInfo,
      withCredentials: true
    }).then(
      res => {
        if (res.data.data === false) {
          localStorage.removeItem('openId')
          props.history.push('/')
        } else {
          setTypeInfo(res.data.data)
        }
      }
    )
  }
  const selectTypehandler = (value) => {
    setSelectType(value)
  }
  const saveArticle = () => {
    if (selectedType === '请选择文章类型') {
      message.error('必须选择文章类型')
      return false
    }else if(!articleTitle){
      message.error('文章标题不能为空')
      return false
    }else if(!articleContent){
      message.error('文章内容不能为空')
      return false
    }else if(!introducemd){
      message.error('文章简介不能为空')
      return false
    }else if(!showDate){
      message.error('发布时间不能为空')
      return false
    }
    // console.log(showDate)
    let dataProps = {
      type_id:selectedType,
      title:articleTitle,
      article_content:articleContent,
      introduce:introducemd,
      addTime:showDate,
    }
    if(articleId == 0 ){
      dataProps.view_count = 0;
      axios({
        method:"post",
        url:servicePath.addArticle,
        data:dataProps,
        withCredentials:true
      }).then(
        res =>{
          setArticleId(res.data.insertId)
          if(res.data.isSuccess){
            message.success('发布成功')
          }else{
            message.error('发布失败')
          }
        }
      )
    }else{
      dataProps.id=articleId
      console.log(articleId)
      axios({
        method:'post',
        url:servicePath.updateArticle,
        data:dataProps,
        withCredentials:true
      }).then(
        res =>{
          if(res.data.isSuccess === true){
            message.success('文章保存成功')
          }else{
            message.error('文章保存失败')
          }
        }
      )
    }
  }
  const getArticlebyId=(id)=>{
    axios(servicePath.getArticleById+id,{
      withCredentials:true
    }).then(
      res=>{
        // console.log(res.data.data[0])
        let articleInfo = res.data.data[0]
        setArticleTitle(articleInfo.title)
        setArticleContent(articleInfo.content)
        let html = marked(articleInfo.content)
        setMarkdownContent(html)
        setIntroducemd(articleInfo.introduce)
        let tmpInt = marked(articleInfo.introduce)
        setIntroducehtml(tmpInt)
        setShowDate(articleInfo.addTime)
        setSelectType(articleInfo.typeId)
      }
    )
  }
  return (
    <div >
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={20}>
              <Input
                value={articleTitle}
                placeholder="博客标题"
                size="large"
                onChange={(e) => { setArticleTitle(e.target.value) }}
              />
            </Col>
            <Col span={4}>
              <Select defaultValue={selectedType} size="large" onChange={selectTypehandler}>
                {
                  typeInfo.map((item, index) => {
                    return (
                      <Option key={index} value={item.Id}>{item.typeName}</Option>
                    )
                  })
                }
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className="markdown-content"
                rows={35}
                placeholder="文章内容"
                value={articleContent}
                onChange={changeContent}
              />
            </Col>
            <Col span={12}>
              <div className="show-html"
                dangerouslySetInnerHTML={{ __html: markdownContent }}
              >
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24} >
              <Button size="large" style={{ marginRight: 30,marginLeft: 40}}>暂存文章</Button>
              <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
            </Col>
            <Col span={24} style={{ marginTop: 30 }}>
              <TextArea
                rows={4}
                placeholder="文章简介"
                onChange={changeIntroduce}
                value={introducemd}
              >
              </TextArea>
              <div className="introduce-html" style={{ marginTop: 30 }}
                dangerouslySetInnerHTML={{ __html: introducehtml }}>
              </div>
            </Col>
            <Col span={12}>
              <div className="date-select">
                <DatePicker
                  placeholder="发布日期"
                  size="large"
                  onChange={(date, dateString) => { setShowDate(dateString) }}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
export default AddArticle