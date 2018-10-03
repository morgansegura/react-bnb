const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {    
        type: String,
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters']
    },
    email: {
        unique: true,
        type: String,
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters'],
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        require: 'Password is required',
        min: [4, 'Too short, min is 4 characters'],
        max: [32, 'Too long, max is 32 characters']        
    },
    rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}],
     bookings: [{ type: Schema.Types.ObjectId, ref: 'Booking' }]
})

userSchema.methods.hasSamePassword = function(requestedPassword) {
    return bcrypt.compareSync(requestedPassword, this.password)
}

userSchema.pre('save', function(next) {
    var user = this
    if (user.isModified('password')) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

module.exports = mongoose.model('User', userSchema)

