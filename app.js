const express = require("express");

const app = express()

app.get('/',(req,res)=>{
    res.send("Welcome to AWS bro !!!!")
})
const port = process.env.port || 3000
app.listen(port,()=>{
    console.log("Server running")
})

