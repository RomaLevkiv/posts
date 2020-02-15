const router = require('express').Router()
const Post = require('../models/PostModels')

router.get('/', async (req, res) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
})

router.post('/', async (req, res) => {
    const PostData = {
        title: req.body.title, 
        text: req.body.text
    }
    const post = new Post(PostData)
    await post.save() 
    
    res.status(201).json(post)
    
})

router.delete('/:idParam', async (req, res) => {
    await Post.deleteOne({_id: req.params.idParam})
    res.status(200).json({
    message: 'Deleted'
})
})

module.exports = router