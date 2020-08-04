const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))
app.use('/api/cat', require('../cats/cats.router'))
app.use('/api/dog', require('../dogs/dogs.router'))

module.exports = app
