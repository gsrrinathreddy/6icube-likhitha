import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function Experience(){
    let [loader,setLoader] = useState(true);
    let [experience,setExperience] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Experience')
                                             .then(res=> {
                                                console.log(res.data);
                                                setExperience(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])

    
    return(
        <h1>Iam a Fresher </h1>
    )
}