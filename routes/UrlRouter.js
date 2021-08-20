const express = require('express')
const router = express.Router()
const Url = require('../models/Urls.js')
const getUrl = require('../utils/urls.js')

router.get('/urls', async (req, res) => {
    Url.find({})
        .then(urls => res.json(urls))
        .catch(error => res.status(404).json({error}))
})

router.post('/urls/create', async (req, res) => {
    try {
        const url = await new Url(req.body).save()
        res.status(200).json({ message: 'Url created', url })
        console.log(url)
    } catch (error) {
        res.status(500).json({ message: 'Unable to create url', error })
    }
})

module.exports = router