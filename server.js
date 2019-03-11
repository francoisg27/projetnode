const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require ('./db/mongoose');
const argv = require('yargs').argv;
const http = require('http');
const app = express();

app.use(bodyParser.json())

const {Client} = require ('./models/client');

const {Car} = require ('./models/car');

const {Seller} = require ('./models/seller');



// GET CLIENT METHOD
app.get('/get/client',function(req,res){
    Client.find(function(err,client){
        if(err){
            res.send(err);
        }
        res.send(client);
    });
})

//POST CLIENT METHOD
app.post('/post/client',function(req,res){
    var client = new Client();
    client.firstName = req.body.firstName;
    client.lastName = req.body.lastName;
    client.age = req.body.age;
    client.phoneNumber = req.body.phoneNumber;
    client.save(function(err){
        if(err){
            res.send(err);
        }
        res.send({message: 'client created'});
    })

})





app.listen(3000, ()=> console.log('Listening on port 3000'));
