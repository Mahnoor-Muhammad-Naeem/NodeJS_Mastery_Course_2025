import http from 'http'

const server = http.createServer((req,res)=>{
    // console.log(req.url)
// res.end('<h1>Your request has been accepted</h1>')

if(req.url === '/wdm'){
    res.end("Welcome to the web dev mastery")
}else if(req.url === '/srk'){
    res.end("We are not able to show anything about srk")
}else{
    res.end("Invalid request")
}


})

const port = 3000;
server.listen(port,()=>console.log(`server is running on port ${port}`))