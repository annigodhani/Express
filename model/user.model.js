const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: String,   // Short Hand Property 
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    hobbies: [{ type: String }],
    address: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete:{
        type: Boolean,
        default: faluse
    }
},
{
    versionKey: false,
    timestemps: true
})

module.exports = mongoose.model('users', userSchema)