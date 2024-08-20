require("dotenv").config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user.routes')
const productRoutes = require('./routes/user.routes')
// console.log(users) 

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
    
app.get('/', (req, res) => {
    res.send("Welcome To Express Server...")
})

app.use("/api/user", userRoutes)

app.listen(1111, () => {
    // Database Connection 
    mongoose
    .connect("mongodb+srv://aniruddhgodhani:aniruddh%4017@cluster0.e6hev.mongodb.net/anni")
    .then(() => 
    console.log("Database Connection Established Sucess..."))
    .catch((err) => console.log(err))
    console.log("Server Start At http://localhost:1111")
})