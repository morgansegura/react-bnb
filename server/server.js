const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const FakeDb = require('./fake-db')

const app = express()
const mongoose = require('mongoose')
require('dotenv').config()



// Models 
const Rental = require('./models/rental')
const rentalRoutes = require('./routes/rentals')


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())

mongoose.Promise = global.Promise
mongoose.connect(process.env.DATABASE).then(() => {
    const fakeDb = new FakeDb()
    fakeDb.seedDb()
})



// Server routes
app.use('/api/v1/rentals', rentalRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
