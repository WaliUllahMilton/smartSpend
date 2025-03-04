import express from "express";


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//app live host 
app.listen(3000,()=>{
    console.log("server on")
})


app.get("/",(req,res)=>{
    res.send("hello")
})