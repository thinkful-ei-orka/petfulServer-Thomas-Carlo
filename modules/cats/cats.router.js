const express = require('express')
const json = require('body-parser').json()

const Pets = require('../pets/pets.service')


const router = express.Router()

router.get('/', (req, res) => {
    // Returns information on current cat.
    const pet = Pets.get();
    res.status(200).json(pet[1]);
})

module.exports = router