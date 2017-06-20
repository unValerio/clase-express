var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
})

module.exports = mongoose.model('Users', userSchema)
