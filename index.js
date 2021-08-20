const express = require('express')
const cors = require('cors')
const connection = require('./config/db.js')
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

app.get('/', (req, res) => {
    res.send('Here we are!')
}
)

// cors config
app.use(
    cors({
        origin: [
            process.env.CLIENT_URL,
        ],
        credentials: true,
    })
)
