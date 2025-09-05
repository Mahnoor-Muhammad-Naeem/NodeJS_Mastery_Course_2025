import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("you are requested for home route")
})

app.get('/srk',(req,res)=>{
    res.send("Here is some info about the srk")
})

const port = 3000;
app.listen(port,()=>console.log(`server is running on port ${port}`))