const {mongoose} = require('../db/mongoose.js');

const Car = mongoose.model('Car',{
    brand:{
        type:String,
        required: true,
        minlength:1
    },
    model:{
        type:String,
        required: true,
        minlength:1
    },
    color:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

module.exports =  { Car };