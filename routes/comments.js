/*
 * get controller
 */
const comments = require('../controllers/comments')

module.exports = (app) => {
    // GET request for list all comments for one post
    app.get('/posts/:id/comments', (req, res) => {
        comments.getComments(req, res)
    })

    // POST request to create new comment for one post
    app.post('/posts/:id/comments', (req, res) => {
        comments.addComment(req, res)
    })

    // PUT request to update a comment
    app.put('/posts/:id/comments/:comment', (req, res) => {
        comments.updateComment(req, res)
    })

    // DELETE request to delete a comment
    app.delete('/posts/:id/comments/:comment', (req, res) => {
        comments.deleteComment(req, res)
    })
}