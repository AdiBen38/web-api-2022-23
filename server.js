const http=require('http');
const app=require('./app');
const port=3000;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log('Server Up')});