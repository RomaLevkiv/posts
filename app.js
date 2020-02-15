const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const keys = require('./keys')
const mongoose = require('mongoose')
const postRouter = require('./routes/postRoutes')


const app = express()
const {port} = keys
const clientPath = path.join(__dirname, 'client')

app.use(bodyParser.json())
app.use(express.static(clientPath))
app.use('/api/post', postRouter)

mongoose.connect(keys.mongoURI,
    {useUnifiedTopology: true,useNewUrlParser: true},)
    .then(() => console.log('MongoDB connect'))
    .then(() => app.listen(port, () => {
        console.log('boss, server has started!')
    }))
    .catch(err => console.error(err))


