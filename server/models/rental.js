const mongoose = require('mongoose')

const rentalSchema = mongoose.Schema({
    title: {
        required: true,
        type: String,
        maxlength: [128, 'Too long, max is 128 characters']
    },
    city: {
        required: true,
        type: String,
        lowercase: true
    },
    street: {
        required: true,
        type: String,
        minlength: [4, 'Too whort, min is 4 characters']
    },
    category: {
        required: true,
        type: String,
        lowercase: true
    },
    image: {
        required: true,
        type: String
    },
    bedrooms: Number,
    shared: Boolean,
    description: {
        type: String,
        required: true
    },
    dailyRate: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },   
})

module.exports = mongoose.model('Rental', rentalSchema)

