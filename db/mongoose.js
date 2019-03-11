const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://francoisg27:P@ssw0rd@projectfinalnode-lsmd9.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})

module.exports = { mongoose};