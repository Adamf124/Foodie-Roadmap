const Schema = require('mongoose').Schema

const userSchema = new Schema({
    name: String,
    address: String,
    email_address: {
        type: String,
        required: true
    },
    userID: Number
})

module.exports = userSchema