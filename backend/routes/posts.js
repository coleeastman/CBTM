const express = require('express')

const {
    createPost,
    getPost,
    getPosts,
    deletePost,
    updatePost
} = require('../controllers/postController')

const router = express.Router()

// get all posts
router.get('/', getPosts)

// get post
router.get('/:id', getPost)

// post post
router.post('/', createPost)

// delete post
router.delete('/:id', deletePost)

// patch post
router.patch('/:id', updatePost)


module.exports = router