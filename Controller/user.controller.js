// const users = require('../user.json')
const User = require("../model/user.model")

exports.addNewUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })

        if (user) {
            return res.status(400).json({ message: 'User Already Exist.....' })
        }
        user = await User.create(req.body)
        res.status(201).json({ user, message: "User Added Success..." })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        let users = await User.find()
        res.status(200).json(users)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}

exports.getUser = async (req, res) => {
    try {
        // let user = await User.findOne({firstName: req.query.firstName})
        // let user = await User.findOne({_id: req.query.userId})
        let user = await User.findById(req.query.userId)
        // console.log(user)
        if (!user) {
            return res.status(404).json({ message: 'User Not Found.....' })
        }
        res.status(200).json(user)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}
