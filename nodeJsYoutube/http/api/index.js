const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("home page");
    }
    else if(req.url=="/about"){
        res.end("about page");
    }
    else if(req.url=="/api_call")
    {
        fs.readFile(`${__dirname}/../userData/data.json`,'utf-8',(err,data)=>{
            // console.log(data);
            console.log(err);
            res.end(data);
        });
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("404");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server started at port no 8000");
});