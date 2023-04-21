import gardening from'./Assersts/gardening.png'
import music from './Assersts/music.png'
import drawing from './Assersts/drawing.png'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
export default function Hobbies(){
    let [loader,setLoader] = useState(true);
    let [hobbies,setHobbies] = useState(null);

    const connectToServer = async () => axios.get('http://localhost:8001/Hobbies')
                                             .then(res=> {
                                                console.log(res.data);
                                                setHobbies(res.data);
                                                setLoader(false)
                                             })

    useEffect(()=>{
        connectToServer();
    },[])

    return(
        <html>
            <body>
                <h2> gardening</h2>
                <img src={gardening} alt="kk" width="200" height="200"/>
                
                <h2> music</h2>
                <img src={music} alt="kk" width="200" height="200"/>
                
                <h2> drawing</h2>
                <img src={drawing} alt="kk" width="200" height="200"/>
            </body>
        </html>
    )
}