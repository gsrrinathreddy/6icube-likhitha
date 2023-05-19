import axios from "axios";
import React from "react";
import { useState } from "react";
export default function Photos(){
    let[id,setId]=useState();
    let[title,setTitle]=useState();
    axios.get("https://jsonplaceholder.typicode.com/photos")
    .then(res=>{
        setId(res.data[0].id)
        setTitle(res.data[0].title)
        console.log(res);
    })

    return(
        <>
    {id}
    <br/>
    {title}
        </>
    )
}