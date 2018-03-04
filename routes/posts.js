/*
 * get controller
 */ 
const posts = require('../controllers/posts')

module.exports = (app) => {
    // GET request for list all posts
    app.get('/posts', (req, res) => {
        posts.getPosts(req, res)
    })

    // POST request for add new post
    app.post('/posts', (req, res) => {
        posts.addPost(req, res)
    })

    // PULL request for update a single post
    app.put('/posts/:id', (req, res) => {
        posts.updatePost(req, res)
    })

    // DELETE request to remove one single post
    app.delete('/posts/:id', (req, res) => {
        posts.deletePost(req, res)
    })
}