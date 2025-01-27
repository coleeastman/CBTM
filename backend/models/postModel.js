const mongoose = require('mongoose');

const Schema = mongoose.Schema

// schema defines structure 
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    upVotes: {
        type: Number,
    },
    downVotes: {
        type: Number,
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)
