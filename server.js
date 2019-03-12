const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require ('./db/mongoose');
const argv = require('yargs').argv;
const http = require('http');
const app = express();
const inputPort = argv.port;

const {Client} = require ('./models/client');

const {Car} = require ('./models/car');

const {Seller} = require ('./models/seller');

app.use(bodyParser.json())

var router = express.Router();

// GET SELLER METHOD
app.get('/get/seller',function(req,res){
        Seller.find(function(err,client){
            if(err){
                res.send(err);
            }
            res.send(client);
        });
    })

//POST SELLER METHOD
app.post('/post/seller',function(req,res){
        var seller = new Seller();
        seller.firstName = req.body.firstName;
        seller.lastName = req.body.lastName;
        seller.age = req.body.age;
        seller.phoneNumber = req.body.phoneNumber;
        seller.save(function(err){
            if(err){
                res.send(err);
            }
            res.send({message: 'seller created'});
        })

    })




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

//GET CAR METHOD
app.get('/get/car',function(req,res){
    Car.find(function(err,car){
        if(err){
            res.send(err);
        }
        res.send(car)
    });
})

//POST CAR METHOD
app.post('/post/car',function(req,res){
    var car = new Car();
    car.brand = req.body.brand;
    car.model = req.body.model;
    car.color = req.body.color;
    car.price = req.body.price;
    car.save(function(err){
        if(err){
            res.send(err);
        }
        res.send({message :'car created'})
    })
})



app.listen(3000, ()=> console.log('Listening on port 3000'));
