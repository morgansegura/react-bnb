const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const FakeDb = require('./fake-db')

const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

// Models
const Rental = require('./models/rental')
const User = require('./models/user')

// Include Routes
const rentalRoutes = require('./routes/rentals'),
      userRoutes = require('./routes/users'),
      bookingRoutes = require('./routes/bookings')

// Middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

// Mongoose && DB Connect
mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE).then(() => {
    const fakeDb = new FakeDb()
    fakeDb.seedDb()
})

// Server routes
app.use('/api/v1/rentals', rentalRoutes)
app.use('/api/v1/users', userRoutes)
app.use('/api/v1/bookings', bookingRoutes)


// Give us a server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
