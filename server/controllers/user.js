const User = require('../models/user')
const { normalizeErrors } = require('../helpers/mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req, res) => {
    const { email, password } = req.body

    if ( !password || !email ) {
        return res.status(422).send({ errors: [{ title: 'Data missing?', detail: 'Provide an email and password.'}]})
    }
    User.findOne({email}, (err, user) => {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) })
        }
        if (!user) {
            return res.status(422).send({ errors: [{ title: 'Invalid user', detail: 'User does not exist.'}]})
        }
        if (user.hasSamePassword(password)) {
            const token = jwt.sign({
                userId: user.id,
                username: user.username
            }, process.env.SECRET, { expiresIn: '1h' })
            return res.json(token)
        } else {
            return res.status(422).send({ errors: [{ title: 'Wrong data!', detail: 'Wrong email or password.'}]})
        }        

    })

}

exports.register = (req, res) => {
    const { username, email, password, passwordConfirmation } = req.body

    if ( !password || !email ) {
        return res.status(422).send({ errors: [{ title: 'Data missing?', detail: 'Provide an email and password.'}]})
    }

    if ( password !== passwordConfirmation ) {
        return res.status(422).send({ errors: [{ title: 'Passwords do not match', detail: 'The passwords provided do not match.'}]})
    }

    User.findOne({email}, (err, existingUser) => {
        if (err) {
            return res.status(422).send({ errors: normalizeErrors(err.errors) })
        }
        if (existingUser) {
            return res.status(422).send({ errors: [{ title: 'Email error', detail: 'This email is already registered.' }] })
        }
        const user = new User({
            username,
            email,
            password
        })
        user.save( (err) => {
            if (err) {
                return res.status(422).send({errors: normalizeErrors(err.errors)})
            }

            return res.json({ 'registered': true })
        })
    })
}

exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        const user = parseToken(token)

        User.findById(user.userId, (err, user) => {
            if (err) {
                return res.status(422).send({errors: normalizeErrors(err.errors)})
            }

            if (user) {
                res.locals.user = user
                next()
            } else {
              return notAuthorized(res)
            }
        })
    } else {
       return notAuthorized(res)
    }
}

const parseToken = token => jwt.verify(token.split(' ')[1], process.env.SECRET)

const notAuthorized = res => res.status(401).send({ errors: [{ title: 'Not authorized!', detail: 'You need to login to get access!'}]})