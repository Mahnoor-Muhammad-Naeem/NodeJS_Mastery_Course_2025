import express from 'express'
import path from 'path'

const app = express();

app.use(express.static(path.join(path.resolve(),'public')))

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

const port = 1000;
app.listen(port,()=>console.log(`Server is running on port ${port}`))