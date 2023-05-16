import express from 'express';

const router = express.Router();

router.get('/register',(req,res)=>{
    res.send("welcome to register api")
})
router.post('/register',(req,res)=>{
    res.send("welcome to register api")
})
router.put('/register',(req,res)=>{
    res.send("welcome to update api")
})
router.delete('/register',(req,res)=>{
    res.send("welcome to delete api")
})
 export default router;