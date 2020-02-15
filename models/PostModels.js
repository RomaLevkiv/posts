const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Post', postSchema)


// EXAMPLE
// const {Schema, model} = require('mongoose')


// const schema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })


// module.exports = model('Todo', schema)