import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("you requested for something")
});

const port = 1000;
server.listen(port,()=>console.log(`server is running on port ${port}`))