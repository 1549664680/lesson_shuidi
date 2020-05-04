import React ,{useState}from 'react'
import 'antd/dist/antd.css'
import {Button,Card,Input,Icon,Spin,message} from 'antd'
import '../static/css/login.css'
import servicePath from '../config/apiUrl'
import axios from 'axios'
function Login(props){
  const [userName,setUserName] = useState('')
  const [passWord,setpassWord] = useState('')
  const [isLoading,setInLoading] = useState(false)
  const checkLogin=()=>{
    setInLoading(true)
    if(!userName){
      message.error('用户名不能为空！')
      setInLoading(false)
    }else if(!passWord){
      message.error('密码不能为空！')
      setInLoading(false)
      return false
    }
    let dataProps = {
      'userName':userName,
      'password':passWord
    }
    axios({
      method:'post',
      url:servicePath.checkLogin,
      data:dataProps,
      withCredentials:true
    }).then(
      res =>{
        setInLoading(false)
        if(res.data.data === true){
          localStorage.setItem('openId',res.data.openId)
          props.history.push('/admin')
        }else{
          message.error('用户名或密码错误!')
        }
      }
    )
  }

  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card title="codelan blog system" bordered={true} style={{width:400}}>
          <Input 
            id="userName"
            size="large"
            placeholder="enter you username"
            prefix={<Icon type="user" style={{color:'rgba(0,0,0,.25)'}}/>}
            onChange={(e)=>{setUserName(e.target.value)}}
          />
          <br/><br/>
          <Input
            id="password"
            size="large"
            type="password"
            placeholder="enter you password"
            prefix={<Icon type="key" style={{color:'rgba(0,0,0,.25)'}}/>}
            onChange={(e)=>{setpassWord(e.target.value)}}
          />
          <br/><br/>
          <Button type="primary" size="large" block onClick={checkLogin}>Login</Button>
        </Card>
      </Spin>
    </div>
  )
}
export default Login