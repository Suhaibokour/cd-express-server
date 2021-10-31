'use strict';

const express = require('express');
const app=express();
const PORT=process.env.PORT || 3000;
require('dotenv').config();
const stamper = require('./middleware/stamper');
const notFoundHandler = require('./handlers/404');




app.get('/',(req,res)=>{
    res.send('PORT is listening')
});

app.get('/data',stamper,(req,res)=>{
    const outputObject={
        10:"even",
        5:"odd",
        "time":req.timestamp
    };
    res.status(200).json(outputObject)
});


// app.get('/bad',(req,res,next)=>{
//     next('you have made an erorr')
// })

app.use('*',notFoundHandler);


function start(){
    app.listen(PORT,()=>{
        console.log(`server started on ${PORT}`)
    })
};

module.exports ={app,start};


