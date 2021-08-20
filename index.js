const express = require('express')
const cors = require('cors')
const connection = require('./config/db.js')
const UrlRouter = require('./routes/UrlRouter.js')
require('dotenv').config()

// initialise express instance
const app = express()

// connect to db
connection()

// establish port
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server now running on port ${port}`)
})

// cors and express config
app.use(
    cors({
        origin: [
            process.env.CLIENT_URL,
        ],
        credentials: true,
    }),
    express.json()
)

// routes
app.use('/', UrlRouter)