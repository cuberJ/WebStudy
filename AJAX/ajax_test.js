const express = require('express');
const app = express();
app.get('/', (request, response)=>{
    response.send('hello world')
});

app.listen(8000, ()=>{
    console.log('监听8000号端口中');
})