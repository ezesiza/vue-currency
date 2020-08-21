const express = require('express')
const router = express.Router()
const request = require('request')

router.get('/coinbase', (req, res) => {
  request('http://api.nbp.pl/api/exchangerates/tables/A', (error, response, body) => {
    if (error) throw error
    const data = JSON.parse(body)
    res.status(200).json({ data })
  })
})

module.exports = router
