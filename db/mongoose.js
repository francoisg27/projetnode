const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Christian:P@ssw0rd@cluster0-6etfj.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})

module.exports = { mongoose};