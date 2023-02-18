const https=require('https');

const server=https.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write('Done Work');
        res.write("Done work");
        res.end();
    }
}).listen(4500,()=>{
    console.log(4500,"server is Started");
})
