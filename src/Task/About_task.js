import { useEffect, useState } from "react"
import React  from 'react'
import axios from "axios"

const About_task = () => {

  const [about,setAbout] = useState({});

  useEffect(()=>{
    axios.get("https://dummyjson.com/c/42aa-8088-4783-b322")
      .then((response)=>{
        setAbout(response.data);
      })
      .catch((error)=>{
        console.log(error);
      });
  },[]);

  return (
    <div>

      {about.map((i , index)=>{
        return (
          <div key={index}>
            <h3> {i.title} </h3> <br/>
            <p> {i.description} </p> <br/>
          </div>
        )
      })}


    </div>
  )
}

export default About_task