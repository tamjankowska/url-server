const express = require('express')
const router = express.Router()
const Url = require('../models/Urls.js')

router.get('/urls', async (req, res) => {
    Url.find({})
        .then(urls => res.json(urls))
        .catch(error => res.status(404).json({error}))
})

router.post('/urls/create', async (req, res) => {
    try {
        const url = await new Url(req.body).save()
        res.status(200).json({ message: 'Url created', url})
    } catch (error) {
        res.status(500).json({ message: 'Unable to create url', error })
    }
})

router.get('/urls/:urlId', async (req, res) => {
    try {
        const url = await Urls.findOne({ urlId: req.params.urlId})
        res.status(200).json(url)
    } catch (error) {
        res.status(404).json(error)
    } // could add error handling here for other response codes: 400s, 500s,
})

module.exports = router