
import express from "express";
const app = express();
app .get("/",(req,res)=>{
    res.send("I have successfully written my first api")
})
app.get("/Books",(req,res)=>{
    res.json(
        {
         books:"bhagavad gita"
        }
    )
})

app.listen(8001,()=>{
    console.log("my server is running on port 8001")
})