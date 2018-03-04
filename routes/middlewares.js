const data = require('../data/posts')

module.exports = {
    /*
     * check post id is set and post exists
     */
    postExists(req, res, next) {
        // check post exists
        if (req.params.id && data.posts[req.params.id]) {
            next()
        }
        
        // send unauthorized response
        res.status(401).send({msg: 'Not authorized'})
    }, 

    /*
     * check post id is set and post exists
     */
    commentExists(req, res, next) {
        // check post exists
        if (req.params.id && data.posts[req.params.id]) {
            if (req.params.comment && data.posts[req.params.id].comments[req.params.comment]) {
                next()
            }
        }
        
        // send unauthorized response
        res.status(401).send({msg: 'Not authorized'})
    },
  }