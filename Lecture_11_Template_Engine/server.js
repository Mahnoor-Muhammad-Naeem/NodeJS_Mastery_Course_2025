import express from 'express'

const app = express();

let products = [
    {title:'iphone - 16',price:75000},
    {title:'galaxy s24 ultra',price:95000},
    {title:'Google pixel',price:65000},
]

app.get('/',(req,res)=>{
    let name = 'Ram'
    res.render('index.ejs', {name,products})
})

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))