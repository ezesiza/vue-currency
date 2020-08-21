const express = require('express')
const bodyParser = require('body-parser')

const coinbase = require('./routes/coinbase')

const app = express()
const cors = require('cors')

// Body parser middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Eze here! Codes works'))
// routes

app.use('/app', coinbase)

const port = process.env.PORT || 5006

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app
