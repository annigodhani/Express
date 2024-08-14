// const users = require('../user.json')
const User = require("../model/user.model")

exports.addNewUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user, message: "User Added Success..." })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}

