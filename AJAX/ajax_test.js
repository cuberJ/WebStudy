const express = require('express');
const app = express();
var count = 0;
app.get('/server', (request, response)=>{
  
    response.setHeader('Access-Control-Allow-Origin', '*'); //这里一个非常重要的点：setHeader的操作一定要在其他操作的前面，否则会导致浏览器跨域请求失败，控制台会报错No 'Access-Control-Allow-Origin' header is present on the requested resource.
    response.setHeader('Access-Control-Allow-Methods', '*');
    //response.send('hello world')
    if(count % 2 == 0)
    {
        response.send('EVEN:' + String(count));
        console.log(String(count));
    }
    else
        response.send('ODD' + String(count));
    count += 1;
    console.log('the count now is ' + count);
});

app.post('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*'); //这里一个非常重要的点：setHeader的操作一定要在其他操作的前面，否则会导致浏览器跨域请求失败，控制台会报错No 'Access-Control-Allow-Origin' header is present on the requested resource.
    response.setHeader('Access-Control-Allow-Methods', '*');
    var name = 'Batman'
    //response.send('hello world')
    const data = {
        'number':count,
        'name': name
    };
    let temp = JSON.stringify(data)
    response.send(temp);
    count += 1;
});

app.listen(8000, ()=>{
    console.log('监听8000号端口的server路径中……');
})