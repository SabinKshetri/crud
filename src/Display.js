import React, { useEffect, useState } from 'react'
import axios from "axios";

import Card from 'react-bootstrap/Card';

export default function Display() {
   const [data,setData]=useState([])
   useEffect(()=>{
    const getReq=async()=>{
      try{
      const response=await axios.get("/api/save/user");
      console.log('response',response.data)
      await setData(response.data)
    }catch(e){

    }
  }
    getReq();

   
   },[])
  return (
    <>
     <Card style={{ width: '18rem'  }}>
    
      <Card.Body>
        <Card.Title>Hello</Card.Title>
        <h1>Username:-</h1>
        {data && data.map((a)=>(
            <p>{a.title}</p>
        ))}
        
      </Card.Body>
    </Card>
    </>
  )
}
