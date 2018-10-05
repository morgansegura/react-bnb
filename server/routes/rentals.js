const express = require('express')
const router = express.Router()
const Rental = require('../models/rental')
const User = require('../models/user')
const { normalizeErrors } = require('../helpers/mongoose');
const UserCtrl = require('../controllers/user')

router.get('/secret', UserCtrl.authMiddleware, (req, res) => {
    res.json({'secret': true})
})

router.get('/:id', (req, res) => {
    const rentalId = req.params.id

    Rental.findById(rentalId)
        .populate('user', 'username -_id')
        .populate('bookings', 'startAt endAt -_id')
        .exec(function (err, foundRentals) {

            if (err) {
                return res.status(422).send({ errors: [{ title: 'Rental Error!', detail: 'Could not find Rental!' }] });
            }

            return res.json(foundRentals);
        })
})

router.post('', UserCtrl.authMiddleware, (req, res) => {

    const { title, city, street, category, image, shared, bedrooms, description, dailyRate } = req.body
    const user = res.locals.user
    const rental = new Rental({ title, city, street, category, image, shared, bedrooms, description, dailyRate })
    rental.user = user

    Rental.create(rental, (err, newRental) => {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }
        User.update({_id: user.id}, {$push: {rentals: newRental}})
        return res.json(newRental)
    })
})

router.get('', (req, res) => {
    const city = req.query.city
    const query = city ? { city: city.toLowerCase() } : {}

    Rental.find(query)
        .select('-bookings')
        .exec((err, foundRentals) => {  

        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) });
        }

        if (city && foundRentals.length === 0) {
            return res.status(422).send({ errors: [{ title: 'No rentals found!', detail: `There are currently no rentals in ${city}` }] });
        }  

        return res.json(foundRentals)
    })    
})

module.exports = router