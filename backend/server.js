require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const postRoutes = require('./routes/posts')

// instance of express application to allow defining routes and middleware
// express() returns an object we call 'app'
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/posts', postRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
        // only listen for requests once connnected to db
        // listen is a method for the app object
        // syntax is 'app.listen(port, [host], [callback])'
        // using port 4000, and the call back is an anonymous fucntion which logs what is happening
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB, Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })