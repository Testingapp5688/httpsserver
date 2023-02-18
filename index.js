const https=require('https');

const server=https.createServer((req,res)=>{
    res.send(200);
    res.write('Done Work');
    res.end();
}).listen(()=>{
    console.log("Server start listening at 5000");
});
