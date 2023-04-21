import cskills from'./Assersts/cskills.png'
import pstthinking from './Assersts/pstthinking.png'
import axios from 'axios';
import { Typography } from '@mui/material';
import {useState,useEffect} from 'react';
export default function Skills(){
    let [loader,setLoader] = useState(true);
    let [skills,setSkills] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Skills')
                                             .then(res=> {
                                                console.log(res.data);
                                                setSkills(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])

    return(
        <html>
            <body>
                <h2> Communication Skills</h2>
                <img src={cskills} alt="oo" width="200" height="200"/>
                
                <h2> Self Motivation </h2>
                <img src={pstthinking} alt="oo" width="200" height="200"/>
                
            </body>
        </html>
    )
}