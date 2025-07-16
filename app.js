const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/Addition",(request,response)=>{
    
    const getnumber1 = parseInt(request.body.num1)
    const getnumber2= parseInt(request.body.num2)
    const sum= getnumber1 + getnumber2
    
    response.json(
    {"sum":sum}
)})

app.post("/sub",(request,response)=>{
    
    
    response.json(
    {"status":"successs"}
)})



app.listen(4000,()=>{console.log("server running")})