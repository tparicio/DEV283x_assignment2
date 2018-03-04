const bodyParser = require('body-parser')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
const middlewares = require('./middlewares')

module.exports = (app) => {
    /*
     * get route files
     */ 
    let posts = require('./posts')
    let comments = require('./comments')

    /*
     * middlewares
     * 
     * body-parser Parse incoming request bodies in a middleware before your 
     *             handlers, available under the req.body property.
     * morgan HTTP request logger middleware for node.js
     * errorhandler display as much about this object as possible, and will do 
     *              so by using content negotiation for the response between 
     *              HTML, JSON, and plain text.
     */ 
    app.use(bodyParser.json())
    app.use(morgan('dev'))
    app.use(errorhandler())

    // middleware to check if post ID is set and post exists
    app.use('/posts/:id', (req, res, next) => {
        middlewares.postExists(req, res, next)
    })

    // middleware to check if post ID is set and post exists
    app.use('/posts/:id/comments', (req, res, next) => {
        middlewares.postExists(req, res, next)
    })

    // middleware to check if post ID is set and post exists
    app.use('/posts/:id/comments/:comment', (req, res, next) => {
        middlewares.commentExists(req, res, next)
    })

    /*
     * load routes
     */ 
    posts(app)
    comments(app)
}