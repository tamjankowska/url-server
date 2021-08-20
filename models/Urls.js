const mongoose = require('mongoose')

const UrlSchema = new mongoose.Schema({
    urlId: String,
    shortUrl: String,
    originalUrl: String,
    clicked: {
        type: Number, 
        default: 0,
    }
}, { timestamps: true })

module.exports = Url = mongoose.model('url', UrlSchema)