const https=require('https');

const server=https.createServer((req,res)=>{
    if(req.url=='/')
    {
        console.log("server is hit");
        res.write('Done Work');
        res.write("Done work");
        res.end();
    }
}).listen(()=>{
    console.log(4500,"server is Started");
})
