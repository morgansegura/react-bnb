const express = require('express')
const router = express.Router()
const Rental = require('../models/rental')

router.get('', (req, res) => {
    Rental.find({}, (err, foundRentals) => {
        if (err) return res.status(400).send({errors: [err]})
        res.status(200).send(foundRentals)
    })
})
router.get('/:id', (req, res) => {
    const rentalId = req.params.id

    Rental.findById(rentalId, (err, foundRental) => {
        if (err) return res.status(400).send({errors: [err]})
        res.status(200).send(foundRental)
    })
})

module.exports = router