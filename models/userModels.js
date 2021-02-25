const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    designation: String
});





const User = mongoose.model('User', userSchema);


module.exports = User;