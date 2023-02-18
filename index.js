const https=require('https');

const server=https.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.statusCode(200);
        res.write('Done Work');
    }
}).listen(()=>{
    console.log("server is Started");
})
