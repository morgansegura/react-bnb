const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rentalSchema = new Schema({
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
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
})

module.exports = mongoose.model('Rental', rentalSchema)

