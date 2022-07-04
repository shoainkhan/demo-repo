const e = require('express');
const express = require('express');
const app = express();

//load mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@nodejs.mfogi6p.mongodb.net/test',(err)=>{
    if(err){
        console.log('Database connection failed',err);
    }
    else{
        console.log('Database connected successfully');
    }
})
app.get('/',(req,res)=>{
    res.send('<h1>This is our mainendpoint part 2!.</h1>')
})

app.listen(4545,()=>{
    console.log('Up and running! -- This is our Books service');
})