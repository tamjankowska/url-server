const mongoose = require('mongoose')
require('dotenv').config()

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB is connected, huzzah!')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connection
