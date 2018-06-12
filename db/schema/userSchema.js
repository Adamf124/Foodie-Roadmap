const Schema = require('mongoose').Schema

const userSchema = new Schema({
    name: String,
    username: String,
    address: String,
    email_address: String
})

module.exports = userSchema