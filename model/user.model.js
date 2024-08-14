const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,   // Short Hand Property 
    lastName: {
        type: String
    },
    email: {
        type: string
    },
    age: {
        type: Number
    },
    hobbies: [{ type: string }],
    address: {
        line1: string,
        line2: string,
        pincode: Number
    }
})

module.exports = mongoose.model('users', userSchema)