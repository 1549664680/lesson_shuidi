import { useState, useEffect } from 'react'

export default function useStats(url){
  const [stats,setStats] = useState()
  const [loading, setLoading] = useState(true)
  const [ error , setError] = useState()
  // useEffect 相当于生命周期函数 mounted
  useEffect( ()=>{
    async function fectchData(){
       const data =  await fetch(url)
        .then(res => res.json())
        .catch(err => setError(err))
      // console.log(data)
      setStats(data)
      setLoading(false)
    }
    fectchData()
  },[url])
  return {
    stats,
    loading,
    error
  }
}