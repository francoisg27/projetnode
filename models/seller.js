const {mongoose} = require('../db/mongoose.js');

const Seller = mongoose.model('Seller',{
    firstName:{
        type:String,
        required: true,
        minlength:1
    },
    lastName:{
        type:String,
        required: true,
        minlength:1
    },
    age:{
        type:Number,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    }
})

module.exports = {Seller};
