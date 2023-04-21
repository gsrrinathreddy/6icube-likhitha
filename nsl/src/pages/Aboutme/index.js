import pic from './Asserts/pic.png'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function Aboutme(){
    let [loader,setLoader] = useState(true);
    let [aboutme,setAboutme] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Aboutme')
                                             .then(res=> {
                                                console.log(res.data);
                                                setAboutme(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])
    return(
        <>
         
      <img src={pic} alt="kk" width="150" height="150"/>
      <h2> N.s.Likhitha.ch</h2>
      <h4>Name:Naga sai Likhitha Cheemakurthi<br/>
          Fathername:Kesava Rao Cheemakurthi<br/>
          MotherName:Naga Lakshmi<br/>
          Address:Repalle,Bapatla
      </h4>
        </>
    )
}