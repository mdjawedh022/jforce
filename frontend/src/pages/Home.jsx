import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
const [data,setData]=useState([])
const dataShow=async()=>{
try{
  let data=await axios.get("http://localhost:8080/api/")
  console.log(data.data)
  setData(data.data)
}catch(err){
  console.log(err)
}
}
useEffect(()=>{
  dataShow()
},[])

  return (
    <div>
   {data?.map((elem)=>{
    return (
      <ul>
        <p>{new Date().toLocaleString()}</p>
        <li>Signin:{elem.createdAt}</li>
        <li>SignOut:-</li>
      </ul>
    );
   })}
    </div>
  )
}

export default Home
