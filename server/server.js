const express = require('express')
const bodyParser = require('body-parser')

const coinbase = require('./routes/coinbase')

const app = express()
const cors = require('cors')

// Body parser middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// database configuration
// const db = require("./utils/keys").mongoURI;

// Test Route
app.get('/', (req, res) => res.send('Eze here! Codes works'))
// routes

app.use('/app', coinbase)

// if (config.util.getEnv('NODE_ENV') !== 'test') {
//     //use morgan to log at command line
//     app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
// }

const port = process.env.PORT || 5006

app.listen(port, () => console.log(`Server running on port ${port}`))

module.exports = app
