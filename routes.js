//importing api's
const express = require('express')
const Users = require('./routes/users')
const Auth  = require('./routes/auth')

module.exports = function(app){
//look for dependency
//Middlware
app.use(express.json())

app.use('/api/users',Users)
app.use('/api/auth',Auth)

// app.use(error)


}