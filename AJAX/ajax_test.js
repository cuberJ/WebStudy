const express = require('express');
const app = express();
app.get('/server', (request, response)=>{
    response.send('hello world')
    response.setHeader('Access-Control-Allow-Origin', '*')
});

app.listen(8000, ()=>{
    console.log('监听8000号端口中');
})