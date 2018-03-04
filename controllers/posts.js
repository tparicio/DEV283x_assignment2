const data = require('../data/posts')

module.exports = {
    /*
     * return all posts
     */ 
    getPosts(req, res) {
        res.status(200).send(data)
    }, 

    /*
     * add new post to posts
     */ 
    addPost(req, res) {
        let post = whitelistPost(req.body) 
        let id = data.posts.length
        // add empty comments array to new post
        post.comments = []

        

        // add post into posts
        data.posts.push(post)

        res.status(201).send({id: id})
    },

    /*
     * update a single post
     */ 
    updatePost(req, res) {
        data.posts[req.params.id] = whitelistPost(req.body) 
        res.status(200).send(data.posts[req.params.id])
    },

    /*
     * delete a single post
     * post comments will be delete on post delete
     */
    deletePost(req, res) {
        data.posts.splice(req.params.id, 1)
        res.status(204).send()
    }  
  }

  /*
   * get request and whitelist post data
   */ 
  whitelistPost = (post) => {
    return {
        name : post.name,
        url : post.url,
        text : post.text
    }
  }