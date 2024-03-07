const express = require('express');
const { readFile } = require('fs');

const app = express();


app.get('/', (req, res)=>{
    readFile('./home.html','utf-8', (err, html)=>{
        if(err){
            res.status(500).send('Sorry');
        }
        res.send(html);
    })
});


app.listen(process.env.PORT||3000,()=>{
    console.log('App available on port on http://localhost:3000');
})