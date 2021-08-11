const express = require('express');
const app = express();
var count = 0;
app.get('/server', (request, response)=>{
    var temp_count = 0;
    response.setHeader('Access-Control-Allow-Origin', '*'); //这里一个非常重要的点：setHeader的操作一定要在其他操作的前面，否则会导致浏览器跨域请求失败，控制台会报错No 'Access-Control-Allow-Origin' header is present on the requested resource.
    response.setHeader('Access-Control-Allow-Methods', '*');
    //response.send('hello world')
    if(count % 2 == 0)
        response.send('EVEN');
    else
        response.send('ODD');
    count += 1;
    temp_count += 1;
    console.log('the count and temp_count now are ' + count + ' and ' + temp_count);
});

app.listen(8000, ()=>{
    console.log('监听8000号端口中');
})