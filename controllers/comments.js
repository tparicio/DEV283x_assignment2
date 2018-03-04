const data = require('../data/posts')

module.exports = {
    /*
     * return comments for one single post
     */
    getComments(req, res) {
      let post = data.posts[req.params.id]
      res.status(200).send(post.comments)
    }, 

    /*
     * add comment to a post
     */ 
    addComment(req, res) {
      let post = data.posts[req.params.id]
      let comment = whitelistComment(req.body) 
      let id = post.comments.length
      // add post into posts
      data.posts[req.params.id].comments.push(comment)

      res.status(201).send({id: id})
    },

    /*
     * update comment inside post
     */ 
    updateComment(req, res) {
      let post = data.posts[req.params.id]
      post.comments[req.params.id] = whitelistComment(req.body) 
      res.status(200).send(post.comments[req.params.comment])
    },

    /*
     * delete comment from one single post
     */ 
    deleteComment(req, res) {
      let post = data.posts[req.params.id]
      post.comments.splice(req.params.comment, 1)
      res.status(204).send()
    }  
  }

    /*
   * get request and whitelist post data
   */ 
  whitelistComment = (comment) => {
    return {
        text : comment.text
    }
  }