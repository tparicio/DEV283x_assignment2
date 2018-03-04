const express = require('express')

/*
 * instiate express framework
 */ 
let app = express()

/*
 * get routes
 */
let routes = require('./routes/routes')

routes(app)

/*
 * init express framework on port 3000
 */ 
app.listen(3000)