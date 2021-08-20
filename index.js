const express = require('express')
const cors = require('cors')
const connection = require('./config/db.js')
require('dotenv').config()

// initialise express instance
const app = express()

// connect to db
connection()

// cors config
app.use(
    cors({
        origin: [
            process.env.CLIENT_URL,
        ],
        credentials: true,
    })
)
