const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')


const router = express.Router()

router.get('/', (req, res) => {
    // Returns information on current dog.
    const pet = Pets.get();
    res.status(200).json(pet[0]);
})

module.exports = router