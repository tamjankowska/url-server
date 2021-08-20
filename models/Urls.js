const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const UrlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        default: nanoid(10), // ~17 years needed, in order to have a 1% probability of at least one collision with 10 characters specified 
    },
    prefixUrl: {
        type: String,
        default: 'https://www.jisc.ac.uk/',
    },
    originalUrl: String,
    clicked: {
        type: Number, 
        default: 0,
    }
}, { timestamps: true })

module.exports = Url = mongoose.model('url', UrlSchema)