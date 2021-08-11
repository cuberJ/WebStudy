const express = require('express');
const app = express();
app.get('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*'); //这里一个非常重要的点：setHeader的操作一定要在其他操作的前面，否则会导致浏览器跨域请求失败，控制台会报错No 'Access-Control-Allow-Origin' header is present on the requested resource.
    response.setHeader('Access-Control-Allow-Methods', '*');
    //response.send('hello world')
    response.send('Now This is the second test...')
    
});

app.listen(8000, ()=>{
    console.log('监听8000号端口中');
})