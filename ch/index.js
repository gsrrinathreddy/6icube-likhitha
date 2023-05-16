import express from 'express';
import authRouter from './routes/auth.js';
const app=express();
app.get('/',(req,res)=>{
    res.send("my new api")
})

app.use('/v1/api/auth', authRouter)
app.listen(2001,()=> console.log("Iam running on port 2001"))