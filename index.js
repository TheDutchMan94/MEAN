const express = require('express');
const app = express();
const path = require('path');
const config = require('./config/database');
var mongoose = require('mongoose');
mongoose.connect(config.uri, { useMongoClient: true }, (err)=>{
    if(err){
        console.log('couldnot connect with the database', err);
    }
    else {
        console.log('Connected with database ' + config.db);
    }
});

mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/client/dist/'));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(3333, ()=>{
    console.log('listening on port 3333');
});