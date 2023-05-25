import axios from 'axios'
import React from 'react';
import { useState,useEffect } from 'react';
export default function Cosmetics(){
    let[loader,setLoader]=useState(true);
    let[cosmetics,setCosmetics]=useState(null);
     const getCosmeticsData=async()=>axios.get("http://localhost:8002/Cosmetics")
         .then(res=>{
            setCosmetics(res.data);
            setLoader(false);
         }).catch(err=>{console.log(err)})
         useEffect(()=>{
           getCosmeticsData()
         },[])
         console.log("Cosmetics",cosmetics)
    return(
        <>
        hii
        </>
    )
} 
