import Link from 'next/link'
import React from 'react'
import Router from 'next/router'
const Home =() =>(
  <div>
    <div>我是首页</div>
    <div><Link href="/jspang">jsapng</Link></div>
    <div><Link href="/jspangA">jsapngA</Link></div>
    <div><button onClick={()=>{Router.push('/jspang')}}>jspang</button></div>
  </div>
)
export default Home