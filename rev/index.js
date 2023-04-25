import express from "express";
import cors from "cors";

const app=express();
app.use(cors())
app.get("/",(req,res)=>{
    res.send("I have successfully completed my first API")
});
app.get("/Cosmetics",(req,res)=>{
    res.json(
        [
            {
                name:"eyelinear",
                status:"false"
            },
              {
                name:"kajal",
                status:"false"
            },
               {
                name:"bb cream",
                status:"false"
            },
               {
                name:"powder",
                status:"false"
            },
               {
                name:"lip stick",
                status:"false"
            },
               {
                name:"hair oil",
                status:"false"
            },
        ]
    )

})
app.listen(8002,()=>{
    console.log("my server is running on port 8002")
})